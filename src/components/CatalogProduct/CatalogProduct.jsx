import styles from './CatalogProduct.module.css';

const CatalogProduct = (props) => {
  return (
    <article className={styles.product}>
      <img src="img/photo-5.jpg" alt={props.title} className={styles.image} />

      <p className={styles.price}>
        689<span className={styles.currency}>₽</span>
      </p>

      <h3 className={styles.title}>
        <button className={styles.detail}>{props.title}</button>
      </h3>

      <p className={styles.weight}>520г</p>

      <button className={styles.add} type="button">
        Добавить
      </button>
    </article>
  );
};

export default CatalogProduct;
