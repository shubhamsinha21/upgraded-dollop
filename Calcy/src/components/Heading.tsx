import React from "react";

interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <div className="heading">
      <h1>{title}</h1>
    </div>
  );
};

export default Heading;
