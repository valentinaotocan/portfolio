import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <nav className='header ptb-xl txt-color-secondary fw-medium'>
      <NavLink to="/">Naslovna</NavLink>
      <NavLink to="/o-meni">O meni</NavLink>
    </nav>
  );
}
export default Header