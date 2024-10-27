import React from "react";
import './navbar.css'

import { NavLink } from "react-router-dom";
import BtnDarkMode from "./../btnDarkMode/BtnDarkMode";
import LanguageButton from "../langBtn/langBtn";
import { useTranslation } from "react-i18next";

const NavBar = () => {
const { t } = useTranslation();
    const activeLink='nav-list__link nav-list__link--active';
    const normalLink='nav-list__link';


    return (
      <nav className="nav">
        <div className="container">
          <div className="nav-row">
            <NavLink to="/" className="logo">
              <strong>Frontend-developer</strong> portfolio
            </NavLink>

            <BtnDarkMode />
            <LanguageButton />

            <ul className="nav-list">
              <li className="nav-list__item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  {t("home.label")}
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  {t("projects.label")}
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink
                  to="/contacts"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  {t("contact.label")}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default NavBar;