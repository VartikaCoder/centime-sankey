import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "Centime Financial Overview": "Centime Financial Overview",
            "Income from Salary": "Income from Salary",
            "Expenses from Bills": "Expenses from Bills",
            "Unknown": "Unknown",
            "Salary": "Salary",
            "Bills": "Bills",
            "Electric Bill": "Electric Bill",
            "Mobile Bill": "Mobile Bill",
            "Salary - Bills": "Salary - Bills",
            "Bills - Mobile Bill": "Bills - Mobile Bill",
            "Bills - Electric Bill": "Bills - Electric Bill",
            "Financial Sankey Diagram": "Financial Sankey Diagram",
            "Loading": "Loading..."
        }
    },
    hi: {
        translation: {
            "Centime Financial Overview": "सेंटीम वित्तीय अवलोकन",
            "Income from Salary": "वेतन से आय",
            "Expenses from Bills": "बिलों से खर्च",
            "Unknown": "अज्ञात",
            "Salary": "वेतन",
            "Bills": "बिल",
            "Electric Bill": "इलेक्ट्रिक बिल",
            "Mobile Bill": "मोबाइल बिल",
            "Salary - Bills": "वेतन - बिल",
            "Bills - Mobile Bill": "बिल - मोबाइल बिल",
            "Bills - Electric Bill": "बिल - बिजली का बिल",
            "Financial Sankey Diagram": "वित्तीय सांकी आरेख",
            "Loading": "लोड हो रहा है..."
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: { escapeValue: false },
        debug: true,
    });

export default i18n;
