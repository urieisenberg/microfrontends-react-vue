import React from 'react';
import ReactDOM from 'react-dom';

//mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<h1>Hi there!</h1>, el);
};

//if we are in development and in isolation, call mount immediately


//otherwise, run through container and export the mount function
