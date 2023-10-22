import { useRef } from "react"

const useLatest = <T>(callback: T): { readonly current: T } => {
  const cbRef = useRef(callback)

  cbRef.current = callback

  // 考虑一下这里为什么不用 useEffect，因为没有必要，每次更新都会重新赋值，而且这里没有其他依赖，加上 useEffect 反而多余
  /*
  useEffect(() => {
    cbRef.current = callback;
  }, [callback]);
  */

  return cbRef
}

export default useLatest
