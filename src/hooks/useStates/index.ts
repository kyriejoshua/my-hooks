import { useCallback, useState } from "react"

const useStates = <T extends object>(initialStates: T) => {
  const [states, setState] = useState(initialStates)

  const setStates = useCallback((patch: unknown) => {
    setState((prevStates) => ({
      ...prevStates,
      ...(typeof patch === "function" ? patch(prevStates) : patch),
    }))
  }, [])

  return [states, setStates]
}

export default useStates
