import { Dispatch, SetStateAction, useState } from 'react'

const useArray = <T = unknown>(
  defaultValue: T[],
): {
  array: T[]
  set: Dispatch<SetStateAction<T[]>>
  push: (element: T) => void
  filter: (
    callback: (value: T, index: number, array: T[]) => value is T,
  ) => void
  update: (index: number, newElement: T) => void
  remove: (index: number) => void
  clear: () => void
} => {
  const [array, setArray] = useState(defaultValue)

  const push = (element: T) => {
    setArray((a) => [...a, element])
  }

  const filter = (
    callback: (value: T, index: number, array: T[]) => value is T,
  ) => {
    setArray((a) => a.filter(callback))
  }

  const update = (index: number, newElement: T) => {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length - 1),
    ])
  }

  const remove = (index: number) => {
    setArray((a) => [
      ...a.slice(0, index),
      ...a.slice(index + 1, a.length - 1),
    ])
  }

  const clear = () => {
    setArray([])
  }

  return { array, set: setArray, push, filter, update, remove, clear }
}

export default useArray
