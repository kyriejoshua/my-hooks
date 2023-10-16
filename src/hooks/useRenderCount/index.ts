import { useEffect, useRef } from "react"

const useRenderCount = (): number => {
  const countRef = useRef<number>(1)

  useEffect(() => {
    countRef.current++
  })

  return countRef.current
}

export default useRenderCount
