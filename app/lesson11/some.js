const prices = [100, 200, 300, 400]

const hasLowPrice = prices.some((price) => price < 100)

if (hasLowPrice) {
  console.log("มีเลขต่ำกว่า 100")
} else {
  console.log("ไม่มีเลขต่ำกว่า 100")
}