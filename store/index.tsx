import { createContext, useReducer, useContext } from "react";

const MainContext = createContext("");

const initialState = {
  auth: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_AUTH":
      return {
        ...state,
        auth: state.auth === false ? true : false,
      };

    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MainContext.Provider value={[state, dispatch]}>
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, ContextProvider, useContext };
