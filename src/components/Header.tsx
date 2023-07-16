import { NavLink } from 'react-router-dom';
function Header() {
  const isActive = true; 
  return (
    <nav className="header ptb-xl txt-color-secondary fw-medium">
      <NavLink to="/" className="mr-xl underline">
        Naslovna
      </NavLink>
      <NavLink to="/o-meni" className="mr-xl underline">
        O meni
      </NavLink>
    </nav>
  );
}
export default Header