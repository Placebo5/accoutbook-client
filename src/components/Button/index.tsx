import React from "react";
import "./styles.scss";

interface IProps {
  width?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const SubMitButton: React.FC<IProps> = ({ width }) => {
  return (
    <button className="button">
      <span className="button__icon">
        <i className="fa fa-check"></i>
      </span>
      저장
    </button>
  );
};

export const WriteButton: React.FC<IProps> = ({ width, onClick }) => {
  return (
    <button className="button button-write" onClick={onClick}>
      <span className="button__icon">
        <i className="fa fa-pencil"></i>
      </span>
      등록
    </button>
  );
};
