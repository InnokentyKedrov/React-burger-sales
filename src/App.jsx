import { Container } from './components/Container/Container';

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <header></header>
      <main>
        <nav>
          <Container className="navigation__container" />
        </nav>
        <section></section>
      </main>
      <footer></footer>
    </>
  );
};
