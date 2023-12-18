import i18n from "i18next";
import {initReactI18next} from "react-i18next";

const resources = {
    en: {
        translation: {
            "Camel or Kebab case?": "Camel or Kebab case?",
            "A study on the readability of different naming conventions.": "A study on the readability of different naming conventions.",
        }
    }, it: {
        translation: {
            "Camel or Kebab case?": "Camel o Kebab case?",
            "A study on the readability of different naming conventions.": "Uno studio sulla leggibilità di diverse convenzioni.",
            "This study is conducted in the context of a project for the course ": "Questo studio è condotto nel contesto di un progetto per il corso ",
            "You will be shown 2 words separated by a white space, and 4 options written in some naming convention. Your task is to select, in the least time possible, the option that rewrites the original 2 words in that naming convention.": "Ti verranno mostrate 2 parole separate da uno spazio e 4 opzioni scritte in una determinata convenzione. Il tuo compito è selezionare, nel minor tempo possibile, l'opzione che riscrive le 2 parole originali in quella convenzione.",
            "For example, the words \"hello world\" can be rewritten in camel case as \"helloWorld\" or in kebab case as \"hello-world\".": "Ad esempio, le parole \"hello world\" possono essere riscritte in camel case come \"helloWorld\" o in kebab case come \"hello-world\".",
            "This study will take approximately 5 minutes to complete.": "Questo studio richiederà circa 5 minuti per essere completato.",
            "First, we need to collect some information about you.": "Prima di iniziare, abbiamo bisogno di raccogliere alcune informazioni su di te.",
            "Continue": "Continua",
            "Not clear? Try the demo mode using the button below.": "Non è chiaro? Prova la modalità demo usando il pulsante qui sotto.",
            "The demo can be stopped at any time by clicking the \"Stop\" button.": "La demo può essere interrotta in qualsiasi momento cliccando il pulsante \"Stop\".",
            "Note": "Nota",
            "The demo will show you whether your answer is correct or not; this will not be the case during the actual experiment.": "La demo ti mostrerà se la tua risposta è corretta o meno; questo non sarà il caso durante l'esperimento vero e proprio.",
            // form
            "Enter your information:": "Inserisci le tue informazioni:",
            "Age": "Età",
            "Eye Issues": "Problemi di vista",
            "Dyslexia": "Dislessia",
            "Fluent English Speaker": "Inglese fluente",
            "Programming Experience": "Esperienza di programmazione",
            "Start": "Inizia",
            "Programming experience is required": "Il campo 'Esperienza di programmazione' è obbligatorio",
            "Age is required": "Il campo 'Età' è obbligatorio",
            "Programming Languages": "Linguaggi di programmazione",
            "Select all languages you are familiar with.": "Seleziona tutti i linguaggi che hai utilizzato.",
            // finished
            "Thank you for participating!": "Grazie per aver partecipato!",
            "Sending your data... Please wait.": "Invio dei dati... Attendere prego.",
            "An error occurred while sending your data. Please notify the experiment conductors, reporting the following text:": "Si è verificato un errore durante l'invio dei dati. Si prega di notificare i conduttori dell'esperimento, riportando il seguente testo:",
            "Your data has been successfully sent. Thank you for participating!": "I tuoi dati sono stati inviati con successo. Grazie per aver partecipato!",
        }
    }
};

i18n.use(initReactI18next).init({
    resources, lng: "it", keySeparator: false, interpolation: {
        escapeValue: false
    }
});

export default i18n;