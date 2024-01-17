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