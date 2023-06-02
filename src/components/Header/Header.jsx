import Logo from 'components/Logo';
import styles from './Header.module.scss';
import Navigation from 'components/Navigation/Navigation';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
    </header>
  );
}
