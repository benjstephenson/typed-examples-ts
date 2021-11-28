namespace Before {


  declare const isUndefined: <A>(a: A) => boolean

  declare const goOnMission: (ship: Starship) => void

  interface Starship {
    registration: string
    engine: string
    crewCount?: number
    safetyCertificationNo?: number
    captain?: string
  }

  const deployShip = (ship: Starship) => {

    if (
      isUndefined(ship.safetyCertificationNo)
      || isUndefined(ship.crewCount)
      || isUndefined(ship.captain)
    ) {
      throw new Error("Ship isn't ready!")
    }

    goOnMission(ship)

  }

}
