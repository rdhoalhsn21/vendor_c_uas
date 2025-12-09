// Import library Express
const express = require('express');
const app = express();
const port = 3003; // Gunakan port berbeda, misalnya 3003, agar tidak bentrok dengan vendor lain/integrator

// Data Menu Vendor C (Resto & Kuliner)
// Struktur ini mensimulasikan Nested Object dengan harga terpisah dari pajak
const vendorCData = [
    {
      "id": 501,
      "details": {
        "name": "Nasi Tempong",
        "category": "Food"
      },
      "pricing": {
        "base_price": 20000,
        "tax": 2000
      },
      "stock": 50
    },
    {
      "id": 502,
      "details": {
        "name": "Es Teh Manis",
        "category": "Drink"
      },
      "pricing": {
        "base_price": 5000,
        "tax": 500
      },
      "stock": 100
    },
    {
      "id": 503,
      "details": {
        "name": "Pisang Goreng",
        "category": "Snack"
      },
      "pricing": {
        "base_price": 10000,
        "tax": 1000
      },
      "stock": 30
    }
];

// Definisikan route/endpoint GET pada path '/'
app.get('/', (req, res) => {
    // Mengirimkan data vendorCData sebagai respons JSON
    res.json(vendorCData);
});

// Jalankan server
app.listen(port, () => {
    console.log(`✅ Vendor C (Resto & Kuliner) berjalan.`);
    console.log(`Endpoint: http://localhost:${port}/`);
});

// Catatan: Tipe data harga (base_price & tax) adalah Number/Integer, sesuai dengan contoh listing.