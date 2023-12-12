import { useRef, useState, useEffect } from "react";

// Lưu các giá trị qua một tham chiếu bên ngoài
// Function component
function UseRef() {
  const [count, setCount] = useState(60);

  let timerId = useRef();
  let prev = useRef();
  let h1Ref = useRef();

  useEffect(() => {
    prev.current = count;
  }, [count]);

  useEffect(() => {
    const rect = h1Ref.current.getBoundingClientRect();
    console.log(rect);
  });

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    console.log("Start: ", timerId);
  };

  const handleStop = () => {
    clearInterval(timerId.current);
    console.log("Stop: ", timerId);
  };

  console.log(count, prev.current);

  return (
    <div>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default UseRef;
