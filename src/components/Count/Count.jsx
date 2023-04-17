import styles from "./Count.module.css";

const Count = ({ count }) => {
  const addCount = () => {};
  const removeCount = () => {};

  return (
    <div className={styles.count}>
      <button className={styles.minus} onClick={removeCount}>
        -
      </button>
      <p className={styles.amount}>{count}</p>
      <button className={styles.plus} onClick={addCount}>
        +
      </button>
    </div>
  );
};

export default Count;
