import Count from '../Count/Count';
import styles from './OrderGoods.module.css';

const OrderGoods = ({ item }) => {
  return (
    <li className={styles.item}>
      <img className={styles.image} src="img/hot-dog_1.jpg" alt={item} />

      <div className={styles.goods}>
        <h3 className={styles.title}>{item}</h3>

        <p className={styles.weight}>245г</p>

        <p className={styles.price}>
          239
          <span className="currency">₽</span>
        </p>
      </div>

      <Count count={1} />
    </li>
  );
};

export default OrderGoods;
