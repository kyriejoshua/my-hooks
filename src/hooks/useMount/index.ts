import { useEffect } from 'react';

const useMount = (fn: () => void): void => {
  if (typeof fn !== 'function') {
    fn = () => {}
  }
  useEffect(() => fn(), []);
}

export default useMount;
