import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

function Paragragh() {
  const context = useContext(ThemeContext);
  return <p className={context.theme}>Có cái con cặc</p>;
}

export default Paragragh;
