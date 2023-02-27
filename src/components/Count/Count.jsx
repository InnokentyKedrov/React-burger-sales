import { useState } from 'react';
import styles from './Count.module.css';

const Count = (props) => {
  const [count, setCount] = useState(props.count);

  const addCount = () => {
    setCount(count + 1);
  };
  const removeCount = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className={styles.count}>
      <button
        className={styles.minus}
        onClick={removeCount}
        disabled={count === 1}
      >
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
