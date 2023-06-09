import React, { useEffect } from 'react';
import useStates from '.';

const Demo = () => {
  const [states, setStates] = useStates<any>({ mockData: {}, loading: false, isLogged: false });

  useEffect(() => {
    fetch('/api/getData').then((data) => setStates({ mockData: data, isLogged: true }));
  }, [])

  if (states.loading) return <div>Loading</div>

  return <>
    <div>{states.isLogged ? 'Name' : 'Sign in'}</div>
    <div>{states.mockData}</div>
  </>
}

export default Demo;
