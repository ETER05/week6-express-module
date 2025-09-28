const express = require('express');
const app = express();
const PORT = 3000;

const {tambah, kali} = require('./utils/math');
const profileRouter = require('./routes/profile');

app.get('/', (req, res) => {
    res.send("NIM: F1D02310095 - Nama: Wicaksono Hadidul Mannan");
});

app.get('/hitung', (req, res) => {
    const hasil = tambah(90, 5);
    res.send("Hasil 90 + 5 = " + hasil);
});

app.get('/hitungkali', (req, res) => {
    const hasil = kali(90, 5);
    res.send("Hasil 90 * 5 = " + hasil);
});

app.use('/profile', profileRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});