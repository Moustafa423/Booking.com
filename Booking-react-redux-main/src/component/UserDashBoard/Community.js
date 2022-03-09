import React from "react";
import Example from "../Posts/PostStructure/PostStructure";

export default function Community() {
 
  return (
    <div className="my-4 d-flex justify-content-center">
      <Example isUser={true} />
    </div>
  );
}
