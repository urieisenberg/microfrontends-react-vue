import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

//mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    }); //if defaultHistory is passed in, use it,  therwise create a memory history object with the initial path

  if (onNavigate) history.listen(onNavigate); //if onNavigate is passed in, listen for changes in the history object and call onNavigate  (this is passed in from the container)

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      //function to be called by the container when the history object changes
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname); //push the next pathname to the history object if it is different from the current pathname
      }
    },
  };
};

//if we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot, {
      defaultHistory: createBrowserHistory(), //use browser history in development  (instead of memory history)
    });
  }
}

//otherwise, run through container and export the mount function
export { mount };
