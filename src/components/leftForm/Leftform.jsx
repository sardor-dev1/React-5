import React, { useState } from "react";
import "./leftform.scss";

const Leftform = () => {
  const [fname, setFname] = useState("");

  return (
    <div className="container left">
      <input type="text" placeholder="fname" />
    </div>
  );
};

export default Leftform;
