import React from "react";

export default function Button({ buttonProps = {}, children }) {
  const { primary, secondary, ...remButtonProps } = buttonProps;
  return (
    <button
      className={`border 
        ${primary ? "bg-green-400" : ""} 
        ${secondary ? "bg-blue-50" : ""}
        bg-gray-100 p-2 rounded
        `}
      {...remButtonProps}
    >
      {children}
    </button>
  );
}
