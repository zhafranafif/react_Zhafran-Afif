/* PROBLEM 1 - Analysis

Ada beberapa kekurangan yang ada pada penulisan kode tersebut
diantaranya adalah : 
- Penggunaan var yang tidak diperlukan
- Inheritence Class yang tidak menggunakan extends
- Tidak menggunakan constructor dan this pada class
- Tidak menggunakan convention seperti camelCase pada penamaan Variabel
*/

class Kendaraan {
        totalRoda = 0
        kecepatanPerJam = 0
}
class Mobil extends Kendaraan{
        totalRoda = 4
        tambahKecepatan(kecepatanBaru) {
        
        this.kecepatanPerJam = this.kecepatanPerJam + kecepatanBaru
        return this.kecepatanPerJam
        
}

        berjalan() {
        this.tambahKecepatan(10)
        }
}
    let mobilCepat = new Mobil()
    mobilCepat.berjalan()
    mobilCepat.berjalan()
    mobilCepat.berjalan()
    console.log('kecepatan mobil tersebut adalah', mobilCepat)

    let mobilLamban = new Mobil()
    mobilLamban.berjalan()
    console.log('kecepatan mobil tersebut adalah',mobilLamban)

