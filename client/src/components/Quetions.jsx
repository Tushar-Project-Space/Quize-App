import React, { useEffect, useState } from "react";
import data from "../database/data";
/** custom hook */
import { useFetchQuestion } from "../hooks/FetchQuestion";
const Quetions = () => {
  const [checked, setChecked] = useState(undefined);
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();
  const quetion = data[0];

  useEffect(() => {
    // console.log(isLoading);
    // console.log(apiData);
    // console.log(serverError);
  });
  function onSelect() {
    setChecked(true);
    // console.log("radio button change");
  }
  return (
    <>
      <div className="quetions">
        <h2 className="text-light">{quetion.question}</h2>

        <ul key={quetion.id}>
          {quetion.options.map((q, i) => (
            <li key={i}>
              <input
                type="radio"
                value={false}
                name="options"
                id={`q${i}-option`}
                onChange={onSelect}
              />

              <label className="text-primary" htmlFor={`q${i}-option`}>
                {q}
              </label>
              <div className="check"></div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Quetions;
