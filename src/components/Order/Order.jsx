import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../store/modalDelivery/modalDeliverySlice';
import OrderGoods from '../OrderGoods/OrderGoods';
import styles from './Order.module.css';
import { useEffect } from 'react';
import { orderRequestAsync } from '../../store/order/orderSlice';

const Order = () => {
  const { totalPrice, totalCount } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderRequestAsync());
  }, []);

  return (
    <div className={styles.order}>
      <section className={styles.wrapper}>
        <div className={styles.header} tabIndex="0" role="button">
          <h2 className={styles.title}>Корзина</h2>

          <span className={styles.count}>{totalCount}</span>
        </div>

        <div className={styles.wrap_list}>
          <ul className={styles.list}>
            {/* {orderList.map((item) => (
              <OrderGoods item={item} key={item} />
            ))} */}
          </ul>

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
            <p className={styles.text}>Бесплатная доставка</p>
            <button className={styles.close}>Свернуть</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
