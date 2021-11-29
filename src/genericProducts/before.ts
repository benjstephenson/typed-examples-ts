namespace Before {

  interface Address {
    line1: string
    line2: string
  }

  interface Cat {
    name: string
    breed: string
    age: number
    registeredAddress: Address
  }

  interface Student {
    studentId: string
    course: string
    registeredAddress: Address
  }


  const formatCatsAddress = (cat: Cat): string => {
    return `Address: ${cat.registeredAddress.line1}, ${cat.registeredAddress.line2}`
  }

  const formatStudentAddress = (student: Student): string => {
    return `Address: ${student.registeredAddress.line1}, ${student.registeredAddress.line2}`
  }

  const formatAddress = (obj: Cat | Student): string => {
    return `Address: ${obj.registeredAddress.line1}, ${obj.registeredAddress.line2}`
  }
}
