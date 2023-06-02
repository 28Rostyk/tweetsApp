import LogoIcon from '../../icon/LogoIcon';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return <NavLink to="/">{LogoIcon}</NavLink>;
};

export default Logo;
