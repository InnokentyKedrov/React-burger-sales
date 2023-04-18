import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productRequestAsync } from "../../store/product/productSlice";
import CatalogProduct from "../CatalogProduct/CatalogProduct";
import Container from "../Container/Container";
import Order from "../Order/Order";
import styles from "./Catalog.module.css";

const Catalog = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    if (category.length) {
      dispatch(productRequestAsync(category[activeCategory].title));
    }
  }, [category, activeCategory]);

  return (
    <section className={styles.catalog}>
      <Container className={styles.container}>
        <Order />
        <div className={styles.wrapper}>
          {isLoading ? (
            <span className={styles.loading}></span>
          ) : (
            <>
              <h2 className={styles.title}>{category[activeCategory]?.rus}</h2>

              <div className={styles.wrap_list}>
                <ul className={styles.list}>
                  {products.length ? (
                    products.map((item) => (
                      <li className={styles.item} key={item.id}>
                        <CatalogProduct item={item} />
                      </li>
                    ))
                  ) : (
                    <h3>К сожалению данного товара сейчас нет в наличии</h3>
                  )}
                </ul>
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Catalog;
