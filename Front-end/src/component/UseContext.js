import Content1 from "./use-context/Content1.js";
import { useContext } from "react";
import { ThemeContext } from "./use-context/ThemeContext.js";
import "../App.css";
/*
Context
CompA => CompB => CompC

1. Create context
2. Provider
3. Consumer
*/

function UseContext() {
  const context = useContext(ThemeContext);
  return (
    <div>
      <button onClick={context.toggleTheme}>Toggle theme</button>
      <Content1 />
    </div>
  );
}

export default UseContext;
