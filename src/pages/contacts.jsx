import React from "react";
import { useTranslation } from "react-i18next";
const Contacts = () => {
    const { t } = useTranslation();
    return (
      <main className="section">
        <div className="container">
          <h1 className="title-1">{t("contact.label")}</h1>

          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">{t("location.label")}</h2>
              <p>
                {t("dshb.label")}, {t("tjk.label")}
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Telegram / WhatsApp</h2>
              <p>
                <a href="tel:+992974236123">+992-974236123</a>
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Email</h2>
              <p>
                <a href="mailto:suhrobtesha@gmail.com">suhrobtesha@gmail.com</a>
              </p>
            </li>
          </ul>
        </div>
      </main>
    );
}
 
export default Contacts;