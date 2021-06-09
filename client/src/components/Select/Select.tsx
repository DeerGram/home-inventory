import ReactSelect, { Props as SelectProps } from "react-select";
import React from "react";
import { SelectStyles } from "./selectStyles";

export interface SelectValue {
  value: string;
  label: string;
}

interface Props {
  onChange: (v: SelectValue) => void;
  options: SelectProps["options"];
  defaultValue?: SelectProps["defaultValue"];
  value?: SelectProps["value"];
  onFocus?: SelectProps["onFocus"];
  isMulti?: boolean;
  closeMenuOnSelect?: boolean;
  isClearable?: boolean;
  disabled?: boolean;
  id?: string;
}

export const Select: React.FC<Props> = ({
  onChange,
  onFocus,
  isMulti = false,
  closeMenuOnSelect,
  options,
  defaultValue,
  value,
  isClearable = false,
  disabled,
  id,
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <ReactSelect
      id={id}
      isClearable={isClearable}
      onFocus={onFocus}
      value={value}
      isSearchable
      isMulti={isMulti !== undefined ? isMulti : true}
      styles={SelectStyles}
      onChange={onChange}
      options={options}
      defaultValue={defaultValue}
      closeMenuOnSelect={closeMenuOnSelect}
      menuIsOpen={menuOpen}
      onMenuClose={() => setMenuOpen(false)}
      onMenuOpen={() => setMenuOpen(true)}
      onBlur={() => setMenuOpen(false)}
      isDisabled={disabled}
    />
  );
};
