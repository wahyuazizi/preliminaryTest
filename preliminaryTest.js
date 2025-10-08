// Soal 1

let inventarisGudangAwal = [
  { id: "B001", nama: "Buku Tulis", stok: 150, harga: 5000 },
  { id: "P002", nama: "Pulpen Gel", stok: 200, harga: 3000 },
  { id: "B003", nama: "Buku Gambar", stok: 80, harga: 8000 },
  { id: "P004", nama: "Pensil Warna", stok: 120, harga: 12000 }
];

// inventarisGudangAwal.push({id:"P005"})
// inventarisGudangAwal.id = "P005"
// console.log(inventarisGudangAwal)

const manajemenInventaris = {
    "data" : inventarisGudangAwal,
    "tambahBarang" : (idBarang, nama, stok, harga) => {
        if(idBarang in inventarisGudangAwal){
            let pesan = "ID sudah ada";
            return pesan;
        }else {
            return inventarisGudangAwal.push({id:idBarang, nama:nama, stok:stok, harga:harga}) 
        }
    },
    "updateStock" : (index, idBarang, nama, stok, harga) => {
        inventarisGudangAwal[index].id = idBarang;
        inventarisGudangAwal[index].nama = nama;
        inventarisGudangAwal[index].stok = stok;
        inventarisGudangAwal[index].harga = harga
        
        return inventarisGudangAwal;

    },
    "cariBarang": (idBarang) => {
        if(idBarang in inventarisGudangAwal){
            for(i=0;i<inventarisGudangAwal.length;i++){
                return inventarisGudangAwal[i].idBarang
            }
        }
    },
    "totalNilaiInventaris": () => {
        let total = 0;
        for(i=0; i<inventarisGudangAwal.length;i++){
            total += inventarisGudangAwal[i].harga
        }

        return total
    }
}


// let mauTambahBarang = manajemenInventaris.tambahBarang("P005", "Pentab", 2, 500000)
// console.log(mauTambahBarang);
// let tes = manajemenInventaris.tambahBarang("B0010", "Pentab", 2, 2000)
// let tes2 = manajemenInventaris.tambahBarang("B0011", "Pentab Layar", 2, 4000)
// console.log(tes)
// console.log(tes2)
// console.log(inventarisGudangAwal)
console.log(manajemenInventaris.data)

// let mauUpdate = manajemenInventaris.updateStock(0, "TES01", "Buku Tes", 3, 1000)
// console.log(mauUpdate)
console.log(manajemenInventaris.totalNilaiInventaris())
console.log(manajemenInventaris.cariBarang('P004'))
// Soal 2

