const scores = [45, 60, 72, 90];

const passingScorese = scores.filter((scores) => {
  return scores >= 60;
});

console.log(passingScorese); // [60, 72, 90]

// สร้างตัวแปร scores เก็บอาเรย์คะแนนของนักเรียน 4 คน
// ใช้เมธอด filter เพื่อกรองเอาเฉพาะคะแนนที่ผ่านเกณฑ์ (60 ขึ้นไป) แล้วเก็บผลลัพธ์ไว้ในตัวแปร passingScores
// แสดงผลลัพธ์ของ passingScores ออกทางหน้าจอคอนโซล
// ผลลัพธ์ที่ได้
// [60, 72, 90]