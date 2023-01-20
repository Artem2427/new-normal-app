export interface AppContextModel {
  appContext: AppContextInitialState;
  setAppContext: (appContext: any) => typeof appContext;
}

export interface AppContextInitialState {
  searchTerm: string;
  colorIds: string[];
  isBurgerMenuOpen: boolean;
}
