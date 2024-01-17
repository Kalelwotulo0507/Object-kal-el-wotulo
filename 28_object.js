//contoh membuat object di dalam js
//1. contoh OBJECT sederhana
let karyawan = {
    nip: '123',
    nama: 'Amir Mahmud',
    alamat: 'Pamulang'
}
console.log('Nip :' + karyawan.nip);
console.log('Nama :' + karyawan.nama);
console.log('Alamat :' + karyawan.alamat);

//2. contoh object yang kompleks
let pegawai = {
    nip: '111'
    nama: 'Budi Mahmud'
    alamat: {
        jalan: 'Jl. Ayam No.3'
        kelurahan: 'Meruya Ilir'
        kecamatan: 'Kebon Jeruk'
        kota: 'Jakarta Barat'
    },
};

pegawai.nama = "Senthod Prawirodigo";
console.log("Nip : " + pegawai.nip);
console.log("Nama : " + pegawai.nama);
console.log("Jalan : " + pegawai.alamat.jalan);
console.log("Kelurahan : " + pegawai.alamat.kelurahan);
console.log("Kecamatan : " + pegawai.alamat.kecamatan);
console.log("Kota : " + pegawai.alamat.kota);
