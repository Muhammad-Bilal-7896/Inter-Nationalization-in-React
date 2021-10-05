import React,{useState,useEffect} from "react";
import i18n from "../../i18n";
//Importing useTranslation and Trans from react-i18next
import { useTranslation, Trans } from 'react-i18next';
import { useHistory,Link } from "react-router-dom";
import "./style.scss";

const Header = () => {
    const { t } = useTranslation();

    const history = useHistory();

    const goTo = () => {
        if(t('description.short_name')=="en")
        {
            history.push(`/about`);
        }
        else{
            history.push(`/${t('description.short_name')}/${t('description.url')}`);
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand navbar-text" to='/'>{t('description.Nav')}</Link>
                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>{t('description.home')}</Link>
                            </li>
                            <li className="nav-item">
                                <span style={{cursor:"pointer"}} className="nav-link" onClick={goTo} tabIndex={-1} aria-disabled="true">{t('description.url')}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header;