import headerLogo from "../../images/navbar_logo.svg";
import "./Navbar.scss";

function Navbar() {
  return (
    <header className="header">
      <div className="header__container">
        <a href="index.html">
          <img src={headerLogo} alt="" />
        </a>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <a className="header__nav-link" href="#">
                Menu
              </a>
            </li>
            <li className="header__item">
              <a className="header__nav-link" href="#">
                News
              </a>
            </li>
            <li className="header__item">
              <a className="header__nav-link" href="#">
                About Us
              </a>
            </li>
            <li className="header__item">
              <a className="header__nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <button className="header__btn">Log in</button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
