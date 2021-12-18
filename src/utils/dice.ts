export const roll = (
  faces: number,
  min = 1,
  modifiers: number[] = [],
): number =>
  rollDice(min, faces) +
  modifiers.reduce(
    (total: number, next: number): number => (total += next),
    0,
  )

export const rollDice = (min: number, max: number): number =>
  min - 1 + Math.ceil(Math.random() * (max - min + 1))

export const rollStats = (): number => {
  const rolls = [0, 0, 0, 0]
  const _map = rolls.map(() => roll(6))
  const _sort = _map.sort((a, b) => b - a)
  const _slice = _sort.slice(0, 3)
  const _reduce = _slice.reduce((total, next) => (total += next), 0)
  return _reduce
}
