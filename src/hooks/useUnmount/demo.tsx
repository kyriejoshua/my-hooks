import React from "react";
import useUnmount from ".";

const ComponentUseUnmount = () => {
  useUnmount(() => window.alert('unmount'))

  return <>
    <header>
      <h2>useUnmount</h2>
    </header>
  </>
}

export default ComponentUseUnmount
