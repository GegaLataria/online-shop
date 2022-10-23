import React from "react";
const LoadingBar = ({ width }) => {
  return (
    <div className="loader">
      <div className="container">
        {width >= 0 && width < 100 ? (
          <div className="innerContainer" style={{ width: `${width}vw` }}></div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default LoadingBar;
