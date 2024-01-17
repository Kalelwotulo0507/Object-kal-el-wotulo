function buatAlamatPegawai(jalan, kota, provinsi) {
    return {
        jalan: jalan,
        kota: kota,
        provinsi: provinsi,

        tampilkanInfo: function () {
            console.log(`Alamat: ${this.jalan}, ${this.kota}, ${this.provinsi}`);
        }
    };
}

function gabungAlamat(alamat1, alamat2) {
    const gabungan = {
        jalan1: alamat1.jalan,
        kota1: alamat1.kota,
        provinsi1: alamat1.provinsi,
        jalan2: alamat2.jalan,
        kota2: alamat2.kota,
        provinsi2: alamat2.provinsi,
    };

    return gabungan;
}

const alamatPegawai1 = new AlamatPegawai("Jl. Sasak", "Jakarta", "DKI Jakarta");
const alamatPegawai2 = new AlamatPegawai("Jl. Lele", "Tangerang", "Banten");

const hasilGabungAlamat = gabungAlamat(alamatPegawai1, alamatPegawai2);
console.log(hasilGabungAlamat);