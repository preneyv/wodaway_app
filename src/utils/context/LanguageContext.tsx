import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';


interface LanguageStoreContextProps {
    language: string;
    switchLanguage: (newValue: string) => void;
}
let globalLocalStoreState: string = "";

const LanguageContext = createContext<LanguageStoreContextProps | undefined>(undefined);

const LanguageStoreProvider : React.FC<{ children: ReactNode }> = ({ children}) => {
    const [language, setLanguage] = useState("fr");

    // Fonction pour mettre à jour l'état
    const switchLanguage = (newValue :string) => {
        setLanguage(newValue);
    };

    useEffect(() => {
        globalLocalStoreState = language;
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, switchLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
const useLanguageStore = (): LanguageStoreContextProps => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLocalStore must be used within a LocalStoreProvider');
    }
    return context;
};

const getLocalState = (): string  => {
    return globalLocalStoreState;
};

export { LanguageStoreProvider, useLanguageStore, getLocalState };