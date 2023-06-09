import React, { useEffect, useState } from 'react';
import useThrowAsyncError from '.';

const Demo = () => {
  const [data, setData] = useState();
  const throwAsyncError = useThrowAsyncError();

  useEffect(() => {
    fetch('/api/data').then(setData).catch((error) => throwAsyncError(error));
  }, [])

  return <div>
    {data}
  </div>
}

export default Demo;
