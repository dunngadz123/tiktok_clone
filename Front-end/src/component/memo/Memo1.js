import { memo } from "react";

function Memo1({ onIncrease }) {
  console.log("re-render");
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={onIncrease}>Click me</button>
    </div>
  );
}

export default memo(Memo1);
