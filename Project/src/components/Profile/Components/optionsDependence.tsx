import { useState } from "react";
import { RecoilState, useRecoilState } from "recoil";
import React, { useEffect } from "react";

type OptionsDependenceProps = {
  stateAtom: RecoilState<any>;
  options: any;
};

const OptionsDependence = ({ stateAtom, options }: OptionsDependenceProps) => {
  const [option, setOption] = useState<any>([]);
  const [value] = useRecoilState(stateAtom);

  useEffect(() => {
    const type: { label: string; value: string } =
      value.unitofmeasurement.label;
    setOption(options[type as any]);
  }, [options, value.unitofmeasurement.label]);
  return option || [];
};

export default OptionsDependence;
