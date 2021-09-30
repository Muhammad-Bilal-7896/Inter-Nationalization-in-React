import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import NavHheader from "../../Components/NavHeader";
import i18n from "../../i18n";
//Importing useTranslation and Trans from react-i18next
import { useTranslation, Trans } from 'react-i18next';
//Setting the use history hook
import { useHistory } from 'react-router-dom';

const lngs = {
    en: { nativeName: 'English' },
    de: { nativeName: 'Deutsch' },
    chi: { nativeName: 'Chinese' },
    ar: { nativeName: 'Arabic' }
};

const About = () => {

    const { t } = useTranslation();

    const history = useHistory();

    const changeTheLanguage = (e) => {
        i18n.changeLanguage(e);
        history.push(`/${e}/${t('description.url')}`);
    }

    return (
        <>
            <Header />
            <NavHheader />
            <hr />
            <h1 className="text-danger container">{t('description.subAbout')}</h1>
            <hr />
            <div className="container mt-4 border">
                <div>
                    {Object.keys(lngs).map((lng) => (
                        <button className="btn btn-primary ml-4 mb-2 mt-2" key={lng} style={{ fontWeight: i18n.language === lng ? 'bold' : 'normal' }} type="submit" onClick={() => changeTheLanguage(lng)}>
                            {lngs[lng].nativeName}
                        </button>
                    ))}
                </div>
                <hr />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p>
                                <Trans i18nKey="description.part1">
                                    Edit <code>src/App.js</code> and save to reload.
                                </Trans>
                            </p>
                            <button
                                className="btn btn-link bg-danger text-light border btn-block"
                            >
                                {t('description.part2')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </>
    )
}
export default About;
