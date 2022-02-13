import React from 'react'
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import Approutes from './router/Routes'
function App() {
  return (
    <Provider store={store}>
          <Approutes/>
    </Provider>
 
  );
}

export default App;
