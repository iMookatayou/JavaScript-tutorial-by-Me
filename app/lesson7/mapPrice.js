const prices = [100, 200, 300];

const vatPrices = prices.map((price) => {
    return price * 1.07;
}) 

console.log(vatPrices);

//สร้างตัวแปร prices เก็บอาเรย์ราคาสินค้า 3 ตัว
//ใช้เมธอด map เพื่อคำนวณราคาสินค้ารวมภาษีมูลค่าเพิ่ม 7% แล้วเก็บผลลัพธ์ไว้ในตัวแปร vatPrices
//แสดงผลลัพธ์ของ vatPrices ออกทางหน้าจอคอนโซล
//ผลลัพธ์ที่ได้
//[107, 214, 321]