# Bahan Tinjauan Legal: Terms, Refund Policy, Privacy

Tanggal: 2026-10-24. Status: draf untuk pihak legal, bukan teks final. Dokumen legal di repo belum diubah.

## Latar belakang

Halaman publik (beranda, `tentang-wuzzpay.html`, `llms.txt`) menyatakan bahwa Wuzzpay dapat berperan sebagai Technical Service Provider (TSP) atau aggregator, tergantung skema gateway mitra. Alur dana mengikuti skema gateway, dan lisensi PJP Bank Indonesia melekat pada gateway mitra. Nama gateway mitra tidak ditampilkan di halaman publik.

Tiga dokumen legal masih memakai sudut pandang lama dan bertentangan dengan hal itu.

## Bagian yang bertentangan

| Lokasi | Isi sekarang | Masalah |
|---|---|---|
| `terms.html` §02 (sekitar baris 37) | "beroperasi murni sebagai TSP… entitas non-lisensi yang TIDAK…" | Bertentangan dengan peran TSP atau aggregator. |
| `terms.html` §02 (sekitar baris 40) | Menyebut Winpay, Espay, iPaymu | Nama mitra tidak boleh tampil di halaman publik. |
| `refund-policy.html` §01 (sekitar baris 23-26) | Judul "Non-Custodial"; Wuzzpay "murni TSP" dan tidak memiliki akses ke dana | Klaim mutlak. Pada skema aggregator, dana dapat melalui Wuzzpay. |
| `privacy.html` (sekitar baris 81) | "Sebagai platform aggregator…" dan menyebut Winpay, Espay, iPaymu | Bertentangan dengan `terms.html` (murni TSP) dan menyebut nama mitra. |

## Usulan kalimat netral (draf)

- Pengganti "murni TSP": "Wuzzpay dapat berperan sebagai Technical Service Provider (TSP) atau sebagai aggregator, bergantung pada skema gateway mitra yang digunakan Merchant. Peran yang berlaku untuk Merchant dijelaskan pada saat aktivasi."
- Pengganti judul "Non-Custodial": "Alur Dana dan Pengembalian Dana". Isi: alur dana, settlement, dan refund mengikuti skema gateway mitra; kewajiban perizinan PJP melekat pada gateway mitra yang memproses pembayaran.
- Pengganti daftar nama: "payment gateway mitra berlisensi Bank Indonesia yang dipilih atau ditetapkan untuk Merchant".

## Pertanyaan untuk pihak legal

1. Jika Wuzzpay berperan sebagai aggregator pada sebagian skema, apakah Wuzzpay sendiri membutuhkan izin PJP, atau bekerja di bawah izin gateway mitra? Ini menentukan apakah frasa "entitas non-lisensi" boleh tetap dipakai.
2. Apakah nama mitra perlu tertulis di dokumen kontrak (misalnya lampiran atau saat onboarding), tetapi tidak di halaman publik?
3. Apakah ketentuan refund dan sengketa perlu dibedakan per skema (TSP atau aggregator)?
4. Apakah rujukan PBI Nomor 23/6/PBI/2021 di `terms.html` masih relevan dan benar? Belum diverifikasi.

## Setelah ada teks final

Terapkan ke `terms.html`, `refund-policy.html`, dan `privacy.html` (ketiganya tetap `noindex`, memakai Tailwind v4 CDN, tidak ikut build CSS). Samakan istilah peran dan alur dana dengan `index.html`, `tentang-wuzzpay.html`, `payment-gateway-vs-aggregator-vs-tsp.html`, dan `llms.txt`.
