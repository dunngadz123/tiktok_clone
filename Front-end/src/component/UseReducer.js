import { useReducer, useRef } from "react";
import reducer, { initState } from "./todo/reducer.js";
import { setJob, addJob, deleteJob } from "./todo/action.js";
import logger from "./todo/logger.js";
/*
    useState
1. Init state: 0
2. Action: Up (state + 1) / Down (state - 1)
    useReducer
1. Init state: 0
2. Action: Up (state + 1) / Down (state - 1)
3. Reducer
4. Dispath
*/


function UseReducer() {
  const [state, dispath] = useReducer(logger(reducer), initState);
  const { job, jobs } = state;

  const inputRef = useRef();

  const handleSubmit = () => {
    dispath(addJob(job));
    dispath(setJob(""));

    inputRef.current.focus();
  };

  return (
    <div>
      <h3>Todo</h3>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter todo..."
        value={job}
        onChange={(e) => {
          dispath(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job} <span onClick={() => dispath(deleteJob(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseReducer;
