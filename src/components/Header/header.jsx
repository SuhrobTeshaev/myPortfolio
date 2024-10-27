import './header.css';
import React from 'react';
import { useTranslation } from "react-i18next";
const Header = () => {
    const { t } = useTranslation();
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Suhrob</em></strong><br />
                    a frontend developer
                </h1>
                
                
            </div>
        </header>
    );
}

export default Header;