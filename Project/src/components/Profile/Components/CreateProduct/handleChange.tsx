import { useState, useEffect, ChangeEvent } from "react";
import { RecoilState, useRecoilState } from "recoil";

type handleChangeProps = {
  stateAtom: RecoilState<any>;
  label: string;
  type?: string;
};

const HandleChange = ({ stateAtom, label, type }: handleChangeProps) => {
  const [value, setValue] = useRecoilState(stateAtom);
  const labelParse = label.toLowerCase().split(" ").join("");
  const [state, setState] = useState(value[labelParse]);

  useEffect(() => {
    if (value[labelParse] !== state) {
      setValue({ ...value, [labelParse]: state });
    }
  }, [value, labelParse, setValue, state, setState, stateAtom]);

  const onChange = (e: any) => {
    if (e.target || typeof e === "number") {
      const { value } = e.target || e;
      if (type === "number") {
        const number = Number(value);
        if (isNaN(number)) return;
        setState(number);
      } else if (type === "boolean") {
        if (e.target.checked) {
          setState(true);
        } else {
          setState(false);
        }
      } else if (type === "images") {
        if (typeof e === "number") {
          const newState = state.filter((_: any, index: number) => index !== e);
          setState(newState);
        } else {
          const files = Array.from(e.target.files as Iterable<File> | FileList);
          const images = files.map((file) => {
            const reader = new FileReader();
            const _file: any = file;
            reader.onload = () => {
              if (reader.readyState === 2) {
                _file["preview"] = reader.result;
                setState((oldArray: any) => [...oldArray, reader.result]);
              }
            };
            reader.readAsDataURL(_file);
          });
        }
      } else setState(value);
    } else {
      setState(e);
    }
  };

  return { value: state, onChange };
};

export default HandleChange;
