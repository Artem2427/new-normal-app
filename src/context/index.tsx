import { createContext, FC, PropsWithChildren, useState } from 'react';
import { AppContextInitialState, AppContextModel } from '../types/context';

const initialState: AppContextModel = {
  appContext: {
    searchTerm: '',
    colorIds: [],
    isBurgerMenuOpen: false,
  },
  setAppContext: (appContext: AppContextInitialState) => appContext,
};

export const AppContext = createContext(initialState);

const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [appContext, setAppContext] = useState<AppContextInitialState>(
    initialState.appContext,
  );

  return (
    <AppContext.Provider value={{ appContext, setAppContext }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
