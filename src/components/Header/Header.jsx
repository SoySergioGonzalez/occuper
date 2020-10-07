import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">Occuper</div>
        <ul>
          <li>
            <a href="/">Interiorismo</a>
          </li>
          <li>
            <a href="/">Oficinas</a>
          </li>
          <li>
            <a href="/">Stands</a>
          </li>
          <li>
            <a href="/">Fachadas</a>
          </li>
          <li>
            <a href="/">Locales</a>
          </li>
          <li>
            <a href="/">Sobre Occuper</a>
            <span className="faAngleDown">
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
            <ul>
              <div className="logo2">
                <li>
                  <a href="/" className="logo2">
                    Occuper
                  </a>
                </li>
              </div>
              <li>
                <a href="/">Metodología</a>
              </li>
              <li>
                <a href="/">Diseñadora</a>
              </li>
              <li>
                <a href="/">Contacto</a>
              </li>
            </ul>
          </li>
          <span className="faBars">
            <FontAwesomeIcon icon={faBars} />
          </span>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
