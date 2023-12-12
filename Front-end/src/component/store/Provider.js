import { useReducer } from "react";
import Context2 from "./Context2";
import reducer, { initState } from "./Reducer";
import logger from "./Logger";

function Provider({ children }) {
  const [state, distpath] = useReducer(logger(reducer), initState);

  return (
    <Context2.Provider value={[state, distpath]}>{children}</Context2.Provider>
  );
}

export default Provider;
