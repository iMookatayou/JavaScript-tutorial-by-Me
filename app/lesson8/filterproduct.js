const products = ["shirt", "pants", "hat", "shoes"]

const newProducts = products.map((products) => {
    return products.toUpperCase
})

console.log(result);

// สร้าง Products มา 4 ตัว
// ใช้เมธอด map เพื่อเรียกค่่าใน array มาเก็บผลลัพธ์ไว้ใน newProducts
// ใช้ toUpperCase เปลี่ยนให้ข้อมูลใน array กลายเป็นตัวใหญ่ทั้งหมด
// ส่งผลลัพธ์ผ่าน console.log 