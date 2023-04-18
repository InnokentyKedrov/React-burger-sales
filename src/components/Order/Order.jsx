import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../store/modalDelivery/modalDeliverySlice";
import OrderGoods from "../OrderGoods/OrderGoods";
import styles from "./Order.module.css";
import { useEffect, useState } from "react";
import { orderRequestAsync } from "../../store/order/orderSlice";

const Order = () => {
  const [basketIsOpen, setBasketIsOpen] = useState(true);
  const { totalPrice, totalCount, orderList, orderGoods, isLoading } =
    useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderRequestAsync());
  }, [orderList.length]);

  return (
    <div className={styles.order}>
      <section className={styles.wrapper}>
        <div
          className={styles.header}
          tabIndex="0"
          role="button"
          onClick={() => {
            setBasketIsOpen(!basketIsOpen);
          }}
        >
          <h2 className={styles.title}>Корзина</h2>

          <span className={styles.count}>{totalCount}</span>
        </div>

        <div
          className={
            basketIsOpen ? styles.wrap_list_open : styles.wrap_list_close
          }
        >
          {isLoading ? (
            <span className={styles.loading}></span>
          ) : (
            <ul className={styles.list}>
              {orderGoods.map((item) => (
                <OrderGoods {...item} key={item.id} />
              ))}
            </ul>
          )}

          <div className={styles.total}>
            <p>Итого</p>
            <p>
              <span className={styles.amount}>{totalPrice}</span>
              <span className="currency">&nbsp;₽</span>
            </p>
          </div>

          <button
            className={styles.submit}
            disabled={OrderGoods.length === 0}
            onClick={() => {
              dispatch(openModal());
            }}
          >
            Оформить заказ
          </button>

          <div className={styles.apeal}>
            {totalPrice >= 599 ? (
              <p className={styles.text}>Бесплатная доставка</p>
            ) : (
              <p className={styles.text}>
                Стоимость доставки уточните при заказе
              </p>
            )}

            <button
              className={styles.close}
              onClick={() => {
                setBasketIsOpen(false);
              }}
            >
              Свернуть
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
