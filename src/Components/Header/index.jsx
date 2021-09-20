import React from "react";
import i18n from "../../i18n";
//Importing useTranslation and Trans from react-i18next
import { useTranslation, Trans } from 'react-i18next';
import "./style.scss";

const lngs = {
    en: { nativeName: 'English' },
    de: { nativeName: 'Deutsch' },
    chi: { nativeName: 'Chinese' },
    ar: { nativeName: 'Arabic' }
};

const Header = () => {
    const { t } = useTranslation();
    return (
        <>
            {/* As a heading */}
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand navbar-text mb-0">
                    {t('description.Nav')}
                    </span>
                </div>
            </nav>
        </>
    )
}
export default Header;