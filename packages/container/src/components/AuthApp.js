import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname, //pass the current pathname to the Auth app
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname); //push the next pathname to the history object if it is different from the current pathname
        }
      },
      onSignIn //pass the onSignIn function to the Auth app
    });
    
    history.listen(onParentNavigate); //listen for changes in the history object and call onParentNavigate  (this is passed in from the Auth app)
  });

  return <div ref={ref} />;
};
