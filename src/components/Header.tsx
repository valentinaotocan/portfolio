import { NavLink } from 'react-router-dom';
function Header() {
  const isActive = true; 
  return (
    <nav className="header ptb-xl txt-color-secondary fw-medium sans-serif">
      <NavLink to="/" className="mr-xl underline">
        Naslovna
      </NavLink>
      <NavLink to="/o-meni" className="mr-xl underline">
        O meni
      </NavLink>
      <NavLink to="/projekti" className="mr-xl underline">
        Projekti
      </NavLink>
      <NavLink to="/kontakt" className="mr-xl underline">
        Kontakt
      </NavLink>
    </nav>
  );
}
export default Header