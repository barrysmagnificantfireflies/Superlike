function formatPrice(price) {
  return `$${Number(price.toFixed(2))}.00`
}

module.exports = {formatPrice}
