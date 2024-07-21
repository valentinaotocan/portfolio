import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import global_en from "./locales/en/global.json";
import global_hr from "./locales/hr/global.json";
import App from "./App";
import "./styles/main.scss";

i18next
  .use(LanguageDetector) // Use language detector
  .init({
    interpolation: { escapeValue: false },
    lng: "auto", // Automatically detect the user's browser language
    fallbackLng: "en", // Fallback language if the detected language is not available
    resources: {
      en: {
        global: global_en,
      },
      hr: {
        global: global_hr,
      },
    },
    ns: ["global"], // Specify the namespace
    defaultNS: "global", // Set the default namespace
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
