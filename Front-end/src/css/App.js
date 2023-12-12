import styles from "./App.module.scss";
import clsx from "clsx";

function App2({ primary, disable }) {
  const classes = clsx(styles.btn, {
    [styles.primary]: primary,
    [styles.disable]: disable,
  });

  return (
    <div>
      <button className={classes}>Chọn bố m</button>
    </div>
  );
}

export default App2;
