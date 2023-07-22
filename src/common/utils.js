export default {
  currencyFormatter: new Intl.NumberFormat('id', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }),
  dateFormatter: new Intl.DateTimeFormat('id', {
    month: "long", year: 'numeric'
  })
}