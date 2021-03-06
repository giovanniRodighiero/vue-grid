import { toArray } from './toArray'

export const calcBreakpoint = (viewport, breakpoints) => {
  const bpArr = toArray(breakpoints)

  const result = bpArr
    .reduce((previous, current) => (
      current.value <= viewport ? current : previous
    ))

  return result.name
}
