import React from "react";
import "./styles.scss";

const Loading: React.FC = () => {
  return (
    <span className="loading">
      <i className="fa fa-spinner"></i>
    </span>
  );
};

export default Loading;
