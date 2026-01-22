const nums = [1, 2, 3, 4, 5];

const multiplyedNums = nums.map((num) => {
    return num * 2;
});

console.log(multiplyedNums);

//สร้างตัวแปร nums เก็บอาเรย์ตัวเลข 5 ตัว
//ใช้เมธอด map เพื่อคูณค่าทุกตัวในอาเรย์ nums ด้วย 2 แล้วเก็บผลลัพธ์ไว้ในตัวแปร multiplyedNums
//แสดงผลลัพธ์ของ multiplyedNums ออกทางหน้าจอคอนโซล
//ผลลัพธ์ที่ได้
//[2, 4, 6, 8, 10]