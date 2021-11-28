namespace After {

  const tag: unique symbol = Symbol()

  type EURO = number & { readonly tag: 'Euro' }
  const toEuros = (n: number): EURO => (n as any)

  type DOLLAR = number & { readonly tag: 'Dollar' }
  const toDollars = (n: number): DOLLAR => (n as any)

  interface EuropeanShop {
    buy: (wallet: EURO, amt: EURO) => EURO
  }

  interface NewZealandShop {
    buy: (waller: DOLLAR, amt: DOLLAR) => DOLLAR
  }

  declare const euroShop: EuropeanShop
  declare const nzShop: NewZealandShop

  const myEuros = toEuros(500)
  const myDOllars = toDollars(1000)


  //nzShop.buy(myChange, 300)

}
