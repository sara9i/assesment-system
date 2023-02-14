import React from "react";
import { Select, Spin } from "antd";

const SelectionOptions = (props) => {
  const data = props.data;
  const fetching = props.fetching;
  const placeholder = props.placeholder;
  const setSelection = props.setSelection;
  const mode = props.mode;
  const defaultValue = props.defaultValue

  const handleChange = (value) => {
    console.log("Data ", data);
    console.log(`selected ${value}`);
    setSelection(value);
  };

  return (
    <Select
      defaultValue={defaultValue}
      mode={mode}
      placeholder={placeholder}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      options={data}
      filterOption={(input, option) =>
        option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      onChange={handleChange}
    />
  );
};

export default SelectionOptions;
