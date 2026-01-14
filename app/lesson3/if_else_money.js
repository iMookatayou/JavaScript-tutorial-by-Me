// มีเงิน 1500
let moneyhave = 1500;
// ราคาคีย์บอร์ด 1000
let keyboardPrice = 1000;
// ถ้ามีเงินมากกว่าหรือเท่ากับราคาคีย์บอร์ด
let moneyEnough = moneyhave >= keyboardPrice;

// ถ้ามีเงินพอ ให้แสดง "ซื้อ" ถ้าไม่พอ ให้แสดง "ไม่ซื้อ"
if (moneyEnough) {
    console.log("ซื้อ"); 
} else {
    console.log("ไม่ซื้อ");
}