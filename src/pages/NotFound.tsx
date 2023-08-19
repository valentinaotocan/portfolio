import { Link } from 'react-router-dom';
import error from '../assets/images/icons/error-404.png';
function NotFound() {
  const linkStyle = {
    color: "#0082c8",
    textDecoration: "underline",
    cursor: "pointer",
  };

  return (
    <div className="error">
      <img src={error} alt="Error" />
      <p className="fs-xl">Uuuups, dogodila se greška!</p>
      <p>Server ne može pronaći traženo.</p>
      <p>
        Vrati se na{" "}
        <Link to="/" style={linkStyle}>
          početnu stranicu
        </Link>
        .
      </p>
    </div>
  );
}
export default NotFound