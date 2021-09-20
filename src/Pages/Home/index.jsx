import React from "react";
import Header from "../../Components/Header";
import NavHheader from "../../Components/NavHeader";
//Importing useTranslation and Trans from react-i18next
import { useTranslation, Trans } from 'react-i18next';

const lngs = {
    en: { nativeName: 'English' },
    de: { nativeName: 'Deutsch' }
};

const Home = () => {
    const { t } = useTranslation();
    return (
        <>
            <Header />
            <NavHheader Nav="Product" text="All Products" />
            <h1 className="text-dark">Internationalization in React</h1>
            <div>
                {Object.keys(lngs).map((lng) => (
                    <button key={lng} style={{ fontWeight: i18n.language === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                        {lngs[lng].nativeName}
                    </button>
                ))}
            </div>
            <p>
                <Trans i18nKey="description.part1">
                    Edit <code>src/App.js</code> and save to reload.
                </Trans>
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                {t('description.part2')}
            </a>
        </>
    )
}
export default Home;