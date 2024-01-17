function adaMobil(merk, warna, tahunProduksi) {
    return {
        merk: merk,
        warna: warna,
        tahunProduksi: tahunProduksi,

        tampilkanInfo: function () {
            console.log('Mobil ${this.merk}, warna ${this.warna}, tahun produksi ${this.tahunProduksi}');
        }
    };
}

function bandingkanTahunProduksi(mobil1, mobil2) {
    if (mobil1.tahunProduksi < mobil2.tahunProduksi) {
        console.log(`${mobil1.merk} lebih tua dibanding ${mobil2.merk}`);
    } else if (mobil1.tahunProduksi > mobil2.tahunProduksi) {
        console.log(`${mobil1.merk} lebih baru dibanding ${mobil2.merk}`);
    } else {
        console.log(`${mobil1.merk} dan ${mobil2.merk} memiliki tahun produksi yang sama`);
    }
}