import React from "react";

const IconWrapper = ({ children, className, width = 15 } = {}) => {
  const margin = (24 - width) / 2;
  return (
    <div className={`${className} inline-block`}>
      <div style={{ marginRight: margin, marginLeft: margin }}>
        <div style={{ width }}>{children}</div>
      </div>
    </div>
  );
};

export default IconWrapper;
