import { BrowserRouter as Router} from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom';
import React from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { render } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-dom';
import { Provider } from '../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux';
import { createStore } from '../../../../../Library/Caches/typescript/2.9/node_modules/redux';
import { rootReducer } from './reducers';
import App from './components/App/App';
import './index.css';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);