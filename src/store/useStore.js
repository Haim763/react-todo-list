import React, { createContext, useReducer, useContext } from 'react';
import todoListReducer from '../reducers/TodoListReducer';

const initialState = {
  todos: [],
  todosIdsCounter: 0,
  todoCount: 0
};

const storeContext = createContext(initialState);

export const useStore = () => {
  const { state, dispatch } = useContext(storeContext);

  return { state, dispatch };
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoListReducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};