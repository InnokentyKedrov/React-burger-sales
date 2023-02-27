import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';
import styles from './Navigation.module.css';
import Container from '../Container/Container';
import { changeCategory } from '../../store/category/categorySlice';

const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  return (
    <nav className={styles.navigation}>
      <Container className={styles.container}>
        <ul className={styles.list}>
          {category.map((item, i) => (
            <li className={styles.item} key={i}>
              <button
                className={cn(
                  styles.button,
                  activeCategory === i ? styles.button_active : ''
                )}
                style={{ backgroundImage: `url(${item.image})` }}
                onClick={() => {
                  dispatch(changeCategory({indexCategory: i}));
                }}
              >
                {item.rus}
              </button>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};

export default Navigation;
