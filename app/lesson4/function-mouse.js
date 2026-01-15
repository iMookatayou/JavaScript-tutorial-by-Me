let moneyHave = 500;
let mousePrice = 800;
let moneyEnough = moneyHave >= mousePrice;

function buymouse() {
    console.log("ซื้อเมาส์เงินพอ");   
} 

function dontbuymouse() {
    console.log("ไม่ซื้อเมาส์เงินไม่พอ");
}

if (moneyEnough) {
    buymouse();
} else {
    dontbuymouse();
}

//มีเงิน 500 บาท
//ราคาเมาส์ 800 บาท
//ตรวจสอบว่า มีเงินพอที่จะซื้อเมาส์หรือไม่
//ถ้ามีเงินพอ ให้เรียกใช้ฟังก์ชัน buymouse
//ถ้าไม่มีเงินพอ ให้เรียกใช้ฟังก์ชัน dontbuymouse