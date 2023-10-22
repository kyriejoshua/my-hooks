import React, { useState } from 'react'
import useLatest from '.'

const DemoUseLatest = () => {
  const [count, setCount] = useState(0)
  const refCount = useLatest(count)

  const updateCount = () => {
    setTimeout(() => {
      window.alert(refCount.current)
    }, 3000)
  }

  return <>
    <header>
      <h2>useLatest</h2>
    </header>
    <section>
      <button onClick={updateCount}></button>
      <button onClick={() => setCount(count + 1)}></button>
      <h3>clicked count: {count}</h3>
      <h3>clicked count with latest: {count}</h3>
    </section>
  </>
}

export default DemoUseLatest
