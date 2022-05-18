import { reactive } from 'vue'

let dollarUS = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumSignificantDigits: 5,
})

const stocksData = reactive({
  funds: 10000,
  stocks: [
    { id: 1, name: 'BMW', price: 110, quantity: 0, hold: 0, isActive: false },
    { id: 2, name: 'Google', price: 200, quantity: 0, hold: 0, isActive: false },
    { id: 3, name: 'Apple', price: 250, quantity: 0, hold: 0, isActive: false },
    { id: 4, name: 'Twitter', price: 150, quantity: 0, hold: 0, isActive: false },
  ]
})

function handleStock(item, port = false) {
  // console.log('okok', stocksData.stocks, item)

  // stocksData.stocks.map(el => el.id === item.id ? item : el)
  // var foundIndex = stocksData.stocks.findIndex(x => x.id == item.id);
  // stocksData.stocks[foundIndex] = item;

  // const newValue = { quantity: 0, hold: port ? (item.hold - item.quantity) : (item.hold + item.quantity) }
  // const a = { ...item, ...newValue }
  // Object.assign(stocksData.stocks, stocksData.stocks.map(el => el.id === item.id ? a : el))
  // console.log('okok2', stocksData.stocks, stocksData.funds)
  // const price = port ? (stocksData.funds + (item.price * item.quantity)) : (stocksData.funds - (item.price * item.quantity))
  // stocksData.funds = (price < stocksData.funds) ? stocksData.funds : price
  // console.log(stocksData.funds, item.price, item.quantity)

  // if ((item.price * item.quantity) < stocksData.funds) {
  //   stocksData.funds = port ? (stocksData.funds + (item.price * item.quantity)) : (stocksData.funds - (item.price * item.quantity))
  //   const newValue = { quantity: 0, hold: port ? (item.hold - item.quantity) : (item.hold + item.quantity) }
  //   Object.assign(stocksData.stocks, stocksData.stocks.map(el => el.id === item.id ? { ...item, ...newValue } : el))
  // }

  stocksData.funds = port ? (stocksData.funds + (item.price * item.quantity)) : ((item.price * item.quantity) < stocksData.funds ? (stocksData.funds - (item.price * item.quantity)) : stocksData.funds)
  const newValue = { quantity: 0, hold: port ? (item.hold - item.quantity) : ((item.price * item.quantity) < stocksData.funds) ? (item.hold + item.quantity) : item.hold }
  Object.assign(stocksData.stocks, stocksData.stocks.map(el => el.id === item.id ? { ...item, ...newValue } : el))
}

export { dollarUS, stocksData, handleStock }
