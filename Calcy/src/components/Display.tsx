import React from "react";

interface displayProps {
  display: string;
}

const Display: React.FC<displayProps> = ({ display }) => {
  return (
    <div className="display">
      <input type="text" value={display} readOnly />
    </div>
  );
};

export default Display;
