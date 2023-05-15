import * as React from "react";
import { useParams } from "react-router-dom";

const Sample = () => {
  const { id } = useParams();
  return (
    <div
      className="container-fluid bg-primary"
      style={{ height: "100%", color: "#fff" }}
    >
      <h4>The passed URL params is</h4>
      <h1>{id || "NA"}</h1>
    </div>
  );
};

export default Sample;
