import React from "react";
import "./styles.scss";

interface IProps {
  name: string;
  value: string;
  searchHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<IProps> = ({ name, value, searchHandleChange }) => {
  return (
    <div className="search">
      <input type="text" name={name} maxLength={7} placeholder="YYYY-MM" value={value} onChange={searchHandleChange} />
      <span className="search__icon">
        <i className="fa fa-search"></i>
      </span>
    </div>
  );
};

export default Search;
