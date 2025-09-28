# Assignment: Express.js & Modul Node.js

## Identitas
- Nama: Wicaksono Hadidul Mannan
- NIM : F1D02310095

## Deskripsi Tugas
Pada tugas ini akan digunakan express yang merupakan framework dari Node.js, dari tugas ini akan dihasilkan output berupa:
- http://localhost:3000 -> menampilkan NIM dan Nama.
- http://localhost:3000/hitung -> menampilkan hasil penjumlahan.
- http://localhost:3000/profile -> menampilkan JSON array profile.
- http://localhost:3000/profile/nim -> menampilkan detail profile berdasarkan nim.

## Hasil
![Output Program](./screenshoot/root.png)
Membuka localhost:3000 dan akan menampilkan NIM serta Nama.

![Output Program](./screenshoot/root-hitung.png)
Buka localhost:3000/hitung yang akan menampilkan hasil dari penjumlahan 90 dengan 5 menggunakan fungsi pada folder utils file math.js.

![Output Program](./screenshoot/root-hitungkali.png)
Buka localhost:3000/hitungkali yang akan menampilkan hasil dari perkalian 90 dengan 5 menggunakan fungsi pada folder utils file math.js.

![Output Program](./screenshoot/root-profileroot.png)
Buka localhost:3000/profile yang akan menampilkan daftar profile (array JSON) yang berisi nim, nama, dan hoby.

![Output Program](./screenshoot/root-profileroot-nim.png)
Buka localhost:3000/profile/nim yang akan menampilkan 1 profile sesuai nim yang dicari pada URL.