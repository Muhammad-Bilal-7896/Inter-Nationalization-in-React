import React, { useEffect } from "react";
import Header from "../../Components/Header";
import NavHheader from "../../Components/NavHeader";
import i18n from "../../i18n";
//Importing useTranslation and Trans from react-i18next
import { useTranslation, Trans } from 'react-i18next';
import { useHistory } from 'react-router-dom';

// const baseRouteUrl = "/:locale(ar|en|de|chi)?";
// export const baseUrl = i18n.language === '/en' ? '' : '/' + i18n.language;

const lngs = {
    en: { nativeName: 'English' },
    de: { nativeName: 'Deutsch' },
    chi: { nativeName: 'Chinese' },
    ar: { nativeName: 'Arabic' }
};

const Home = () => {

    const { t } = useTranslation();

    const history = useHistory();

    const changeTheLanguage = (e) => {
        i18n.changeLanguage(e);
        if (e == "en") {
            history.push(`/`);
        }
        else{
            history.push(`/${e}`);
        }
    }

    useEffect(()=>{
        // if(window.location.pathname === "/en")
        // {
        //     console.log(window.location.pathname);
           
        // }
    },[])

    return (
        <>
            <Header />
            <NavHheader />
            <hr />
            <h1 className="text-success container">{t('description.subHome')}</h1>
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
export default Home;
