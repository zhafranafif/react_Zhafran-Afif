## Summary materi Clean Code

1. Clean Code
> Clean Code adalah istilah untuk code yang mudah untuk di pahami, 
> dibaca, dan diubah oleh programmer

2. Formatting pada Code
- Lebar Baris Code 80 - 120 Karakter.
- Satu class 300-500 baris
- Baris code yang berhubungan saling berdekatan
- Dekatkan fungsi dengan pemanggilnya
- Deklarasi variabel berdekatan dengan penggunanya
- Perhatian Indentasi
- Menggunakan /*prettier*/ atau /*formatter*/

3. Clean Code Principle
a. DRY (Dont Repeat Yourself)
> Duplikasi code terjadi karena sering copy paste. 
> Untuk menghindari duplikasi code buatlah fungsi yang dapat digunakan secara berulang - ulang
b. KISS (Keep It So Simple)
> Hindari membuat fungsi yang dibuat untuk melakukan A, sekaligus memodifikasi B, mengecek fungsi C, dst.
c. Refactoring
> Refactoring adalah proses restrukturisasi code yang dibuat, dengan cara mengubah 
> struktur internal dengan mengubah perilaku eksternal, Prinsip KISS dan DRY bisa
> didapat dengan refactor.
