import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <ul className={styles.menu}>
      <NavLink className={styles.link} to="/home">
        <p>Home</p>
      </NavLink>
      <NavLink className={styles.link} to="/tweets">
        <p>Tweets</p>
      </NavLink>
    </ul>
  );
};

export default Navigation;
