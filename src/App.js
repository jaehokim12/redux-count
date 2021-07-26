import createStore from './store';
import reducers from './reducers';
import { Provider } from 'react';
import './App.css';
import React from 'react';
import CountComponent from './components';
const store = createStore(reducers);

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <CountComponent></CountComponent>
        </Provider>
      </div>
    );
  }
}

export default App;
