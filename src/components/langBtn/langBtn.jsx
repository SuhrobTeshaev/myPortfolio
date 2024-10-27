import classes from "./lang.module.css";
import { useTranslation } from "react-i18next";
import "./../../i18n";
import { memo, useCallback, useState } from "react";

const LanguageButton = memo(() => {
  const { i18n } = useTranslation();
  const [activeLocale, setActiveLocale] = useState("ru");

  const changeLanguage = useCallback(
    (language) => {
      i18n.changeLanguage(language);
      setActiveLocale(language);
    },
    [i18n]
  );
  const listLocales = ["en", "ru"];

  return (
    <div className={classes.languageSwitcher}>
      <ul className={classes.items}>
        {listLocales.map((locale) => (
          <li key={locale} className={classes.li_item}>
            <button
              className={`${classes.item} ${
                activeLocale === locale ? classes.active : ""
              }`}
              onClick={() => changeLanguage(locale)}
            >
              {locale.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default LanguageButton;
