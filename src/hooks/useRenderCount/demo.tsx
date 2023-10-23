/*
 * @Author: kyriejoshua
 * @Description: TODO
 * @Date: 2023-10-16 22:52:03
 * @LastEditors: kyriejoshua
 * @LastEditTime: 2023-10-23 22:24:06
 */
import React, { useState } from 'react';
import useRenderCount from '.';

const ComponentUseRenderCount = () => {
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

export default ComponentUseRenderCount;
