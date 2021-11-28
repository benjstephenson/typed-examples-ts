namespace Before {

  const modelToDomainMapper = <T>(from: any, attributes: string[]): T =>
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
  const starshipAttributes: StarshipAttributes[] = ['id', 'model', 'engine']


  const starship = modelToDomainMapper<Starship>(starshipFromDB, starshipAttributes)
}
