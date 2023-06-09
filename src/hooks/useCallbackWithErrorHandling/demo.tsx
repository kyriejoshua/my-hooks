import React from 'react';
import useCallbackWithErrorHandling from '.';

const Demo = () => {
  const onClick = () => {
    // do something dangerous here
  }

  const onClickWithErrorHandler = useCallbackWithErrorHandling(onClick);

  return <button onClick={onClickWithErrorHandler}>click me!</button>
}

export default Demo;
