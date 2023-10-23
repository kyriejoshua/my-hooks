import React from 'react';
import useCallbackWithErrorHandling from '.';

const ComponentUseCallbackWithErrorHandling = () => {
  const onClick = () => {
    // do something dangerous here
    throw new Error('custom err!')
  }

  const onClickWithErrorHandler = useCallbackWithErrorHandling(onClick);

  return <button onClick={onClickWithErrorHandler}>click me!</button>
}

export default ComponentUseCallbackWithErrorHandling
