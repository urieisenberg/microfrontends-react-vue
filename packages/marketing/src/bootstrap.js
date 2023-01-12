import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory } from 'history';
import App from './App';

//mount function to start up the app
const mount = (el, { onNavigate }) => {
  const history = createMemoryHistory(); //create a memory history object  to use in the app  (instead of browser history)
  if (onNavigate) history.listen(onNavigate); //if onNavigate is passed in, listen for changes in the history object and call onNavigate  (this is passed in from the container)
  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate() {
      console.log('container just navigated');
    },
  };
};

//if we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

//otherwise, run through container and export the mount function
export { mount };
