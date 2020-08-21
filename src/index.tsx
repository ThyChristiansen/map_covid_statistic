import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { App } from './components/Apps/App';
import { reducers } from './components/reducers';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const store = createStore(reducers, applyMiddleware(thunk));

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Quicksand"', 'sans-serif'].join(','),
  },
  palette: {
    type: "dark",
    primary: { main: '#fff' }, 
    secondary: { main: '#195C60' }, 
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.querySelector('#root')
);
