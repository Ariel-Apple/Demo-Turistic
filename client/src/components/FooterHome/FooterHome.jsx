import "./FooterHome.scss";
import { Link } from "react-router-dom";

export default function FooterHome() {
  return (
    <div className="footer-container">
      <div className="text-footer-home">
        <span>© 2023 Place Enc</span> <span>-</span>{" "}
        <Link to="/">Términos y Privacidad</Link>
      </div>
    </div>
  );
}
