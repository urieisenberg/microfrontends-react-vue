import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname); //push the next pathname to the history object if it is different from the current pathname
        }
      },
    });

    history.listen(onParentNavigate); //listen for changes in the history object and call onParentNavigate  (this is passed in from the marketing app)  
  });

  return <div ref={ref} />;
};
