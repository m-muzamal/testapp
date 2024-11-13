import React, { memo } from "react";

const About = () => {
  console.log("about");
  return (
    <div>
      <h1>About Component</h1>
    </div>
  );
};

export default memo(About);
