namespace After {

  interface Address {
    line1: string
    line2: string
  }

  interface HasRegisteredAddress {
    registeredAddress: Address
  }

  interface Cat extends HasRegisteredAddress {
    name: string
    breed: string
    age: number
  }

  interface Student extends HasRegisteredAddress {
    studentId: string
    course: string
  }

  const formatAddress = <T>(obj: T & HasRegisteredAddress): string => {
    return `Address: ${obj.registeredAddress.line1}, ${obj.registeredAddress.line2}`
  }
}
