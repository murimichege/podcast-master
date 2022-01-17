import React from 'react'
import './App.css';
import Main from './components/routing/main'
import {Provider} from 'react-redux'
import store from './redux/store'
function App() {
  return (
    <Provider store={store}>
          <Main/>
    </Provider>
 
  );
}

export default App;
