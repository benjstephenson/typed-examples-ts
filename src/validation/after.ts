namespace Before {

  declare const isUndefined: <A>(a: A) => boolean

  declare const goOnMission: (ship: Starship) => void

  type WithRequiredFields<T, K extends keyof T> = T & {
    [k in K]-?: T[k]
  }

  type UnsafeButReadyShip = WithRequiredFields<Starship, 'crewCount' | 'captain'>
  type SafeShip = WithRequiredFields<Starship, 'safetyCertificationNo'>

  const isUseable = <K extends keyof Starship>(o: Starship, keys: K[]): o is WithRequiredFields<Starship, K> => {
    return keys.every(key => !isUndefined(o[key]))
  }

  const isUnsafeButReady = (o: Starship): o is UnsafeButReadyShip => isUseable(o, ['crewCount', 'captain'])
  const isSafeShip = (o: Starship): o is SafeShip => isUseable(o, ['safetyCertificationNo'])

  interface Starship {
    registration: string
    engine: string
    crewCount?: number
    safetyCertificationNo?: number
    captain?: string
  }

  const boldlyGo = (ship: Starship) => {

    if (!isUnsafeButReady(ship))
      throw new Error("Ship is not ready!")

    goOnMission(ship)

  }

  const safelyGo = (ship: Starship) => {

    if (!isSafeShip(ship))
      throw new Error("Ship is not safe!")

    goOnMission(ship)

  }

}
