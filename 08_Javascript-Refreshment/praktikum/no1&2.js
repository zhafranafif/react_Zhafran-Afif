var a = 5
let b = "kampus merdeka"
const nama = "Budi"
let terdaftar = false
let lengkap_arr = [a,b,nama,terdaftar]
let asal = "indonesia"
function perkenalan(){
    return console.log(
 "perkenalkan nama saya " + nama + " nomor urut " + a + " sekarang sedang mengikuti " + b + " berasal dari " + asal)
}
// Jawaban no 1 b. mengubah operator perbandingan dari === menjadi !== agar console dapat mengeluarkan output
if (terdaftar !== true){
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka")
}

a = b
// nama = b / diberikan comment agar program dapat berjalan


console.log(lengkap_arr[2]) // Jawaban no 1 a. budi
// Jawaban no 1 d.
console.log("array = " + lengkap_arr[2])
console.log("a adalah = " + a)
console.log("b adalah = " + b)
perkenalan() // Jawaban no 1 c.


/* 
Jawaban Praktikum no 2

2 a. Baris 21,22,23 tidak dapat tampil dikarenakan operator perbandingan pada statement if
     tidak sesuai dengan apa yang kita deklarasikan pada global scope.
2 b. Baris 26 menyebabkan error karena kita melakukan reassign kembali pada variabel nama, dimana variabel const 
     sendiri tidak dapat di reassign kembali.
2 c. Dengan melakukan comment pada baris ke 26, program pada baris ke 28 dapat berjalan atau ter eksekusi dikarenakan tidak ada barisan / deklarasi yang 
     menyalahi aturan penulisan program.
*/


