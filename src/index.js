import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import App from "./App";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const idioma = navigator.language.split('-')[0];

const mensajes = idioma === 'es' ? localeEsMessages : localeEnMessages;

ReactDOM.render(
    <IntlProvider locale={idioma} messages= {mensajes}>
            <App/>
    </IntlProvider>, document.getElementById("root")
);
