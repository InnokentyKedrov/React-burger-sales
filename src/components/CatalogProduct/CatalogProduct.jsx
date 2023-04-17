import { useDispatch } from "react-redux";
import { API_URI } from "../../const";
import { addProduct } from "../../store/order/orderSlice";
import styles from "./CatalogProduct.module.css";

const CatalogProduct = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <article className={styles.product}>
      <img
        src={`${API_URI}/${item.image}`}
        alt={item.title}
        className={styles.image}
      />

      <p className={styles.price}>
        {item.price}
        <span className={styles.currency}>₽</span>
      </p>

      <h3 className={styles.title}>
        <button className={styles.detail}>{item.title}</button>
      </h3>

      <p className={styles.weight}>{item.weight} г</p>

      <button
        className={styles.add}
        type="button"
        onClick={() => dispatch(addProduct({ id: item.id }))}
      >
        Добавить
      </button>
    </article>
  );
};

export default CatalogProduct;
