import { Styles, GroupTypeBase } from "react-select";

export const SelectStyles: Partial<Styles<any, true, GroupTypeBase<any>>> | undefined = {
  valueContainer: (base) => ({
    ...base,
    background: "#bbbbbb",
    color: "#222222",
    ":hover": {
      borderColor: "#bbbbbb",
    },
  }),
  option: (base) => ({
    ...base,
    padding: "0.5rem",
    width: "100%",
    backgroundColor: "#bbbbbb",
    color: "#222222",
    cursor: "pointer",
    transition: "background-color 200ms",
    borderRadius: "0.2rem",
    marginTop: "0.2rem",
    ":hover": {
      backgroundColor: "#cccccc",
    },
  }),
  menu: (prov) => ({
    ...prov,
    width: "100%",
    color: "#222222",
    padding: "0.5rem",
    backgroundColor: "#bbbbbb",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
  }),
  multiValue: (base) => ({
    ...base,
    color: "#222222",
    backgroundColor: "#2f2f2F",
    borderColor: "#2f2f2F",
  }),
  noOptionsMessage: (base) => ({
    ...base,
    color: "#222222",
  }),
  multiValueLabel: (base) => ({
    ...base,
    backgroundColor: "#2f2f2F",
    color: "#222222",
    padding: "0.2rem 0.8rem",
    borderRadius: "2px 0 0 2px",
  }),
  multiValueRemove: (base) => ({
    ...base,
    backgroundColor: "#2f2f2f",
    borderRadius: "0 2px 2px 0",
    cursor: "pointer",
    ":hover": {
      opacity: "0.8",
    },
  }),
  indicatorsContainer: (base) => ({
    ...base,
    backgroundColor: "#bbbbbb",
    color: "#222222",
  }),
  clearIndicator: (base, state) => ({
    ...base,
    cursor: "pointer",
    color: state.isFocused ? "#222222" : "#222222",
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    cursor: "pointer",
    color: state.isFocused ? "#222222" : "#222222",
  }),
  control: (base, state) => ({
    ...base,
    background: "#bbbbbb",
    border: state.isFocused ? "2px solid #0a84ff" : "2px solid #bbbbbb",
    boxShadow: "none",
    ":hover": {
      borderColor: "none",
      boxShadow: "none",
    },
    ":focus": {
      borderColor: "#0a84ff",
      boxShadow: "none",
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: "#222222",
    opacity: "0.4",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#222222",
  }),
  input: (base) => ({
    ...base,
    color: "#222222",
  }),
  container: (base) => ({
    ...base,
    borderColor: "none",
    ":hover": {
      borderColor: "none",
    },
  }),
};
