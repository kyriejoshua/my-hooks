import React, { useState } from 'react';
import useMount from '.';

const ComponentUseMount = () => {
  const [data, setData] = useState(0);

  useMount(() => {
    // getData setData
  })

  return <>
    <header>
      <h2>useMount</h2>
    </header>
    <section>
      <h3>data: {data}</h3>
    </section>
  </>
}

export default ComponentUseMount;
