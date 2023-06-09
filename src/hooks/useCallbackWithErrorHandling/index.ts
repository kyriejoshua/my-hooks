import { useState } from "react"

const useCallbackWithErrorHandling = <T extends Function>(callback: T) => {
  const [, setState] = useState()

  return (...args) => {
    try {
      callback(...args)
    } catch (error: any) {
      setState(() => {
        throw error
      })
    }
  }
}

export default useCallbackWithErrorHandling
