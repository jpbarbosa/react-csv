import { createContext, useState } from 'react';

type AppContextProps = {
  csvInput: string;
  setCsvInput: Function;
  parsedData: {}[];
  setParsedData: Function;
};

export const AppContext = createContext<AppContextProps>({
  csvInput: '',
  setCsvInput: () => {},
  parsedData: [],
  setParsedData: () => {},
});

type AppContextProviderProps = {
  initialData: string;
  children: React.ReactNode;
};

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  initialData,
  children,
}) => {
  const [csvInput, setCsvInput] = useState(initialData);
  const [parsedData, setParsedData] = useState([]);

  return (
    <AppContext.Provider
      value={{ csvInput, setCsvInput, parsedData, setParsedData }}
    >
      {children}
    </AppContext.Provider>
  );
};
