import React from "react";
import "./searchBos.css";
const SearchBox = props => {
  const { placeholder, onChange } = props;
  return (
    <input
      className="search"
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default SearchBox;
