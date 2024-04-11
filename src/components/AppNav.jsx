import { NavLink, Link } from 'react-router-dom';
import styles from './AppNav.module.css';
function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to='cities'>Cities</NavLink>
        </li>
        <li>
          <NavLink to='countries'>Counties</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
