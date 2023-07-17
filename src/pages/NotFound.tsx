import error from '../assets/images/icons/error-404.png';
function NotFound() {
  return (
    <div className="not-found">
      <img src={error} alt="Error" />
      <p className="fs-xl">Uuuups, dogodila se greška!</p>
      <p>Server ne može pronaći traženo.</p>
    </div>
  );
}
export default NotFound