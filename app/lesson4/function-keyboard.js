let moneyHave = 1000;
let keyboardPrice = 800;
let moneyEnough = moneyHave >= keyboardPrice;

function buykeyboard() {
    console.log("ซื้อคีย์บอร์ด");   
}

function dontbuykeyboard() {
    console.log("ไม่ซื้อคีย์บอร์ด");   
}

if (moneyEnough) {
    buykeyboard();
} else {
    dontbuykeyboard();
}

//มีเงิน 1000 บาท
//ราคาคีย์บอร์ด 800 บาท
//ตรวจสอบว่า มีเงินพอที่จะซื้อคีย์บอร์ดหรือไม่
//ถ้ามีเงินพอ ให้เรียกใช้ฟังก์ชัน buykeyboard
//ถ้าไม่มีเงินพอ ให้เรียกใช้ฟังก์ชัน dontbuykeyboard