import {
  DependencyList,
  useCallback,
  useEffect,
  useState,
} from 'react'

const useAsync = <T>(
  callback: () => Promise<T>,
  dependencies: DependencyList = [],
): {
  loading: boolean
  error: Error | undefined
  value: T | undefined
} => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | undefined>()
  const [value, setValue] = useState<T | undefined>()

  const callbackMemoized = useCallback(async () => {
    setLoading(true)
    setError(undefined)
    setValue(undefined)
    try {
      const result = await callback()
      setValue(result)
    } catch (error) {
      setError(error as Error)
    } finally {
      setLoading(false)
    }
  }, [callback, ...dependencies])

  useEffect(() => {
    callbackMemoized()
  }, [callbackMemoized])

  return { loading, error, value }
}
export default useAsync
