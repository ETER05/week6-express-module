const express = require('express');
const router = express.Router();

const profiles = [
    {nim: "F1D02310095", nama: "Wicaksono Hadidul Mannan", hoby: "Baca Komik..."},
    {nim: "F1D02310001", nama: "Tulip Tuliplip", hoby: "Menyentuh Rumput"},
    {nim: "F1D02310002", nama: "Wahyu Santosa", hoby: "Berjalan Kaki"},
    {nim: "F1D02310003", nama: "Diddy Sentosa", hoby: "Bernyanyi"},
];

router.get('/', (req, res) => {
    res.json(profiles);
});

router.get('/:nim', (req, res) => {
    const nim = req.params.nim;
    profile = profiles.find(p => p.nim === nim);

    if (profile) {
        res.json(profile);
    } else {
        res.status(404).json({ message: "Profile tidak ditemukan" });
    }
});
module.exports = router;