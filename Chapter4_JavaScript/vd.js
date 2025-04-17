// let width = 5;
// let height = 10;
// let area = width * height;
// console.log("Diện tích hình chữ nhật là: " + area);
// ===================================================================================================
//tính và in n lên màn hình tổng các số nguyên chẫn trong dãy từ 1 đến n
//a. cách for
//b. cách while
//c. cách do.. while

// let n = 11
// let s = 0

// for (let i=1; i<=n; i++)
//     if (i % 2 ==0)
//         s=s+i
// console.log(s)
// let n = 11
// let s = 0
// let i=2
// // while (i<=n){
// //     s+=i
// //     i=i+2
// // }

// do {
//     s+=i
//     i=i+2
// }
// while (i<=n)
// =============================================================================================
// khởi tạo 1 mảng có 10 số nguyên:
// - cho biết có bn số nguyên chẵn;
// - tính trung bình cộng các số nguyên chẵn;
// - tìm và thay thế những phần tử có gtri 5 thay bằng 10, in dsach các phân tử
// trong mảng trên lên màn hình

// const m = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let count = 0
// let sum = 0
// let avg_sum = 0


// for (let i = 0; i < m.length; i++) {
//     if (m[i] % 2 == 0) { 
//         count+=1;         
//         sum += m[i];     
// }}

// if (count > 0) {
//     avg_sum = sum / count; 
// }
// console.log("số nguyên chẵn "+ count);
// console.log("trung bình cộng các số nguyên chẵn "+ avg_sum);


// for (let i = 0; i < m.length; i++) {
//     if (m[i] == 5) { 
//         m[i] = 10;    
//     }
// }
// console.log(m) 
// =====================ham==================================
// const m = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let count = (m) =>  {
//     let count = 0 
//     let  sum = 0;
//     for (let i = 0; i < m.length; i++) {
//             if (m[i] % 2 == 0) { 
//                 count+=1;         
//                 sum += m[i];     
//         }}
//     return count
// }

// let dem=count(m)
// let trungbinhcong = (m) => {
//     let count = 0; avg_sum = 0
//     let sum = 0
//     for (let i = 0; i < m.length; i++) {
//             if (m[i] % 2 == 0) { 
//                 count+=1;         
//                 sum += m[i];     
//         }}
//     return avg_sum = sum / count
// }

// let thaygiatri=(m) => {
//     for (let i = 0; i < m.length; i++) {
//         if (m[i] == 5) { 
//             m[i] = 10;    
//         }
//     }
//     return m
// }

// console.log("số nguyên chẵn "+ count(m));
// console.log("trung bình cộng các số nguyên chẵn "+ trungbinhcong(m)); 
// console.log(thaygiatri(m)) 
// =====================================================

