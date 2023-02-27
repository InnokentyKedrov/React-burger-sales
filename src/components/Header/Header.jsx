import styles from './Header.module.css';
import logo from '../../assets/img/logo.svg';
import cn from 'classnames';
import Container from '../Container/Container';

const Header = () => {
  return (
    <header className={cn(styles.header)}>
      <Container>
        <div className={styles.container}>
          <img className={styles.logo} src={logo} alt="Логотип YourMeal" />

          <div className={styles.wrapper}>
            <h1 className={styles.title}>
              <span>Только самые</span>
              <span className={styles.red}>сочные бургеры!</span>
            </h1>

            <p className={styles.appeal}>Бесплатная доставка от 599₽</p>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
