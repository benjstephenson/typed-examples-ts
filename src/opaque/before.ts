namespace Before {


  type EURO = number

  type DOLLAR = number

  interface EuropeanShop {
    buy: (wallet: EURO, amt: EURO) => EURO
  }

  interface NewZealandShop {
    buy: (waller: DOLLAR, amt: DOLLAR) => DOLLAR
  }

  declare const euroShop: EuropeanShop
  declare const nzShop: NewZealandShop

  const myEuros = 50
  const myDOllars = 1000

  const change = euroShop.buy(myEuros, 20)
  nzShop.buy(change, 60)


}
