import { useState, useCallback } from "react";
import Memo1 from "./memo/Memo1";
/*
1. memo() => Higher Order Component (HOC)
2. useCallback()
    - Reference types
    - React memo()
Hooks
HOC
Render props
*/
function Memo() {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <Memo1 onIncrease={handleIncrease}></Memo1>
      <h1>{count}</h1>
    </div>
  );
}

export default Memo;
