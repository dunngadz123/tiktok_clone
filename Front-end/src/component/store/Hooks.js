import Context2 from "./Context2";
import { useContext } from "react";

export const useStore = () => {
  const [state, distpath] = useContext(Context2);

  return [state, distpath];
};
