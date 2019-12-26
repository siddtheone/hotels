import React, { useReducer } from 'react';
import {Provider} from './store';
import reducer, {initialState} from './reducer';
import styles from './app.module.css';
import Filter from './components/Filter';
import Hotels from './components/Hotels'

function App() {
  const state = useReducer(reducer, initialState);

  return (
    <Provider value={state}>
      <div className={styles.container}>
        <Filter />
        <Hotels />
      </div>
    </Provider>
  );
}

export default App;
