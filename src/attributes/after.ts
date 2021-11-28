namespace After {

  const modelToDomainMapper = <T>(from: any, attributes: (keyof T)[]): T =>
    attributes.reduce((acc, attr) => {
      acc[attr] = from[attr]
    }, {} as any)



  class StarshipModel {
    id: string
    engine: string
    model: string
  }

  const starshipFromDB = new StarshipModel()


  interface Starship {
    id: string
    engine: string
    model: string
  }

  type StarshipAttributes = keyof Starship
  const starshipProto: Record<StarshipAttributes, null> = {
    id: null,
    engine: null,
    model: null
  }

  const starshipAttributes = Object.keys(starshipProto) as StarshipAttributes[]

  const starship = modelToDomainMapper<Starship>(starshipFromDB, starshipAttributes)
}
