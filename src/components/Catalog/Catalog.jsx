import CatalogProduct from '../CatalogProduct/CatalogProduct';
import Container from '../Container/Container';
import Order from '../Order/Order';
import styles from './Catalog.module.css';

const goodsList = [
  { title: 'Мясная бомба' },
  { title: 'Супер сырный' },
  { title: 'Сытный' },
  { title: 'Итальянский' },
  { title: 'Вечная классика' },
  { title: 'Тяжелый удар' },
];

const Catalog = () => {
  return (
    <section className={styles.catalog}>
      <Container className={styles.container}>
        <Order />
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Бургеры</h2>

          <div className={styles.wrap_list}>
            <ul className={styles.list}>
              {goodsList.map((item) => (
                <li className={styles.item} key={item.title}>
                  <CatalogProduct title={item.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Catalog;
