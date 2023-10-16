import React, { useState } from 'react';
import useRenderCount from '.';

const Demo = () => {
  const renderCount = useRenderCount();
  const [count, setCount] = useState(0);

  return <>
    <header>
      <h2>useRenderCount</h2>
    </header>
    <section>
      <button onClick={() => setCount((count) => ++count)}>add count!</button>
      <h3>count: {count}</h3>
      <h3>renderCount: {renderCount}</h3>
    </section>
  </>
}

export default Demo;
