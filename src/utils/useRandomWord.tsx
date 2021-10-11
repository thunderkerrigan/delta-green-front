import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

interface Props {
  speed?: number
  rounds?: number
  letters?: string
  word: string
}

const useRandomWord = ({
  speed = 50,
  rounds = 12,
  letters = 'abcdef0123456789',
  word,
}: Props): [string] => {
  const [currentRound, setCurrentRound] = useState(0)
  const _letters = useRef<string[][]>()
  const [randomizedWord, setRandomizedWord] = useState('PLACEHOLDER')

  const animate = useCallback(() => {
    const nextRound = currentRound + 1
    if (nextRound >= rounds) {
      return
    }
    setCurrentRound(nextRound)
    animation.current = window.setTimeout(animate, speed)
    _letters.current &&
      setRandomizedWord(
        _letters.current
          .map((letters) => {
            const index = Math.min(currentRound, letters.length - 1)
            return letters[index]
          })
          .reduce((a, v) => `${a}${v}`, ''),
      )
  }, [currentRound, rounds, speed])

  const animation = useRef<number>()
  useEffect(() => {
    const randomSequenceFor = (letter: string) => {
      const min = Math.floor(rounds / 3)
      const max = rounds
      const _rounds = Math.floor(Math.random() * rounds)
      const length = Math.min(Math.max(_rounds, min), max)

      return Array.from({ length })
        .map(() => {
          const randomLetter = () => {
            const position = Math.floor(
              Math.random() * letters.length,
            )
            return letters[position]
          }
          let _randomLetter = randomLetter()
          while (_randomLetter === letter) {
            _randomLetter = randomLetter()
          }
          return _randomLetter
        })
        .concat(letter)
    }
    if (!_letters.current) {
      _letters.current = word
        .split('')
        .map((char, i) => randomSequenceFor(word[i]))
    }
    if (!animation.current) {
      animation.current = window.setTimeout(animate, speed)
    }
    return () => {
      window.clearTimeout(animation.current)
    }
  }, [animate, letters, rounds, speed, word])

  return [randomizedWord]
}
export default useRandomWord
