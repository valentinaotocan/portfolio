import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import global_en from "./locales/en/global.json";
import global_hr from "./locales/hr/global.json";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/main.scss";

i18next.init({
  // Disable automatic character escaping in translations
  interpolation: { escapeValue: false },

  // Set the language to automatically detect the user's browser language
  lng: "auto",

  // Fallback language if the user's language is not available
  fallbackLng: "en",

  resources: {
    en: {
      global: global_en,
    },
    hr: {
      global: global_hr,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
