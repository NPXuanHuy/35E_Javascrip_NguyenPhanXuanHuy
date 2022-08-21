// Bài 2 Giá trị trung bình của 5 sô

// Đầu vào
// a = 1;
// b = 2;
// c = 3;
// d = 4;
// e = 5;

// xử lý

// trungBinh = (a + b + c + d +e) / 5

// Đầu ra
 
// trungBinh = ? 

var a = 1;
var b = 2;
var c = 3;
var d = 4;
var e = 5;

trungBinh = (a + b + c + d + e) / 5;

console.log('trungBinh la: ' + trungBinh)


/**Bài 3 Quy đổi ra VND
 * 
 * Đầu vào
 * a = 23000
 * n = 2
 * 
 * Xử lý 
 * quyDoi = 2 * 23000
 * 
 * Đầu ra
 * quyDoi = ?
 */

var a = 23000;
var n = 2;

quyDoi = n * 23000;

console.log('quyDoi la:' + quyDoi);



/**Bài 4 tính diện tích , chu vi
 * 
 * Đầu vào
 * dai = 4
 * rong = 3
 * 
 * Xử lý
 * dienTich = dai * rong
 * chuVi = (dai + rong) * 2 
 * 
 * Đầu ra
 * dienTich = ?
 * chuVi = ?
 */

var dai = 4;
var rong = 3;

dienTich = dai * rong;
chuVi = (dai + rong) * 2;

console.log('dienTich la: '+ dienTich);
console.log('chuVi la: '+ chuVi);


/**bài 5
 * Đầu vào
 * n = 13
 * 
 * Xử lý
 * hangChuc = n / 10
 * hangDonvi = n % 10
 * 
 * Đầu ra
 * tong = hangChuc + hangDonvi
 */
  var n = 13;
   
  hangChuc = Math.floor(n / 10);
  hangDonvi = Math.floor(n % 10);
  tong = hangChuc + hangDonvi;

  console.log('tong la: '+ tong);

