let keranjang = [
    {nama: "Buku Tulis", harga: 5000, qty: 10},
    {nama: "Pulpen", harga: 3000, qty: 5},
    {nama: "Penggaris", harga: 4000, qty: 2}
];

keranjang.push({
    nama: "Tas", harga: 75000, qty: 1
});

let subtotal = keranjang.map(function(data){
    return data.harga * data.qty
})

let total = subtotal.reduce(function(a, b){
    return a + b
})

let produk = keranjang.filter(function(data){
    return data.harga > 3500
})

let namaProduk = produk.map(function(data){
    return data.nama
})

console.log("Subtotal: " + subtotal);
console.log("Total Belanja: " + total);
console.log("Harga di atas 3.500: " + namaProduk);


