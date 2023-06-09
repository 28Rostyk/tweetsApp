import LogoIcon from '../../assets/icon/LogoIcon';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return <NavLink to="/home">{LogoIcon}</NavLink>;
};

export default Logo;
