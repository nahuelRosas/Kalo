import { useEffect, useState } from "react";
import { RecoilState, useRecoilState } from "recoil";

type handleChangeProps = {
  stateAtom: RecoilState<any>;
  label: string;
  type?: string;
};

const HandleChange = ({ stateAtom, label, type }: handleChangeProps) => {
  const [value, setValue] = useRecoilState(stateAtom);
  const [Loading, setLoading] = useState(false);
  const [dontRepet, setDontRepet] = useState(false);
  let labelParse = label.toLowerCase().split(" ").join("");
  if (label === "Display Name") labelParse = "displayName";
  if (label === "Phone Number") labelParse = "phoneNumber";

  const [state, setState] = useState(value[labelParse]);

  useEffect(() => {
    if (value && value[labelParse] && !dontRepet) {
      setState(value[labelParse]);
      setDontRepet(true);
    }
  }, [Loading, dontRepet, labelParse, state, value]);

  useEffect(() => {
    if (value[labelParse] !== state && Loading === true) {
      setValue({ ...value, [labelParse]: state });
    }
  }, [value, labelParse, setValue, state, setState, stateAtom, Loading]);

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
          files.map((file) => {
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
      } 
      else if (type === "subElement"){
        const { name, value } = e.target;
        setState((oldState: any) => ({ ...oldState, [name]: value }));
      }
      else setState(value);
    } else {
      setState(e);
    }
    setLoading(true);
  };

  return { value: state, onChange };
};

export default HandleChange;
