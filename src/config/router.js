import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";

//Importing Pages 
import Home from "../Pages/Home";
import About from "../Pages/About";

import { useTranslation, Trans } from 'react-i18next';
import i18n from "../i18n";

const baseRouteUrl = "/:locale(ar|en|de|chi)?";
export const baseUrl = i18n.language === '/en' ? '' : '/' + i18n.language;

function AppRouter() {

  const { t } = useTranslation();

  return (
    <div>
      <Router>
        <Route exact path={"/"} component={Home} />
        {(baseRouteUrl === "/") ? (
          <Route exact path={baseRouteUrl + "/"} component={Home} />
        ) : (
          <></>
        )}

        <Route exact path={"/about"} component={About} />
        <Route path={`${baseRouteUrl}/${t('description.url')}`} component={About} />
      </Router>
    </div>
  );
}

export default AppRouter;