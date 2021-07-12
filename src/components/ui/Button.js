import React from "react";

export default function Button({ buttonProps = {}, children, classes }) {
  const { primary, secondary, ...remButtonProps } = buttonProps;
  return (
    <button
      className={`border 
        ${primary ? "bg-green-400" : ""} 
        ${secondary ? "bg-blue-50" : ""}
        p-2 rounded 
        ${classes}
        `}
      {...remButtonProps}
    >
      {children}
    </button>
  );
}
