import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.scss';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
