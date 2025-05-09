import React from "react";
import Quetions from "./Quetions";
const Quize = () => {
  /** Next button event handler */
  function onNext() {
    console.log("On Next Click");
  }

  /** Prev button event handler */
  function onPrev() {
    console.log("On Prev Click");
  }
  return (
    <div className="container">
      <h1 className="title text-light">Quize Application</h1>
      {/* display quetions */}
      <Quetions />
      <div className="grid">
        <button className="btn prev" onClick={onPrev}>
          Prev
        </button>
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quize;
