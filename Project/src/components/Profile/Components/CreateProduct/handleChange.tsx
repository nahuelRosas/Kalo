import { useState, useEffect } from "react";
import { RecoilState, useRecoilState } from "recoil";

type handleChangeProps = {
  stateAtom: RecoilState<any>;
  label: string;
  type: string;
};

const HandleChange = ({ stateAtom, label, type }: handleChangeProps) => {
  const [value, setValue] = useRecoilState(stateAtom);
  const labelParse = label.toLowerCase().split(" ").join("");
  const [state, setState] = useState(value[labelParse]);

  useEffect(() => {
    if (value[labelParse] !== state) {
      setValue({ ...value, [labelParse]: state });
    }
  }, [value, labelParse, setValue, state]);

  const onChange = (e: any) => {
    if (e.target) {
      const { value } = e.target;
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
      } else setState(value);
    } else {
      setState(e);
    }
  };

  return { value: state, onChange };
};

export default HandleChange;
