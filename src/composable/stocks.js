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
  stocksData.funds = port ? (stocksData.funds + (item.price * item.quantity)) : ((item.price * item.quantity) < stocksData.funds ? (stocksData.funds - (item.price * item.quantity)) : stocksData.funds)
  const newValue = { quantity: 0, hold: port ? (item.hold - item.quantity) : ((item.price * item.quantity) < stocksData.funds) ? (item.hold + item.quantity) : item.hold }
  Object.assign(stocksData.stocks, stocksData.stocks.map(el => el.id === item.id ? { ...item, ...newValue } : el))
}

export { dollarUS, stocksData, handleStock }
