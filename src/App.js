import React from 'react';
import './App.css';
import TodoList from './views/TodoList';
import Header from './views/Header';

const App = () => {
  return (
    <div className="App">
      <StoreProvider>
        <Header />
        <TodoList />
      </StoreProvider>
    </div>
  );
}

export default App;
