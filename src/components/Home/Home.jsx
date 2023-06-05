import styles from './Home.module.scss';

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Wellcome</h2>
        <p className={styles.text}>
          We are glad to welcome you to our application!
        </p>
      </div>
    </section>
  );
};

export default Home;
