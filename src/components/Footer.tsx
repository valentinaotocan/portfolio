export default function Footer() {
  return (
    <footer className="footer flex flex-jc--c flex-ai--c text-center linear-bg plr-custom txt-color-primary fs-base fw-normal">
      <p>
        Sva prava pridržana. &copy; Valentina Otočan {new Date().getFullYear()}.
      </p>
    </footer>
  );
}