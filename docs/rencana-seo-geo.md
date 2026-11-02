# Rencana SEO dan GEO (lanjutan setelah ada data)

Dibuat 2026-11-03. Tujuan: Wuzzpay dikutip AI generatif dan mendapat trafik organik untuk pencarian "payment gateway" (murah, Indonesia, untuk website, terbaik, cara daftar), bukan hanya "payment orchestration".

## Status

Lima artikel sudah live dan dikirim lewat IndexNow (2026-11-03): `cara-daftar-payment-gateway`, `payment-gateway-untuk-website`, `payment-gateway-murah`, `payment-gateway-indonesia` (hub), `alternatif-payment-gateway`. Pembuatan artikel baru dihentikan sementara sampai ada data.

## Syarat sebelum melanjutkan

- Ajukan "Request Indexing" di Search Console untuk kelima URL.
- Tunggu sekitar 1 sampai 2 minggu, lalu ambil data Search Console: query, impresi, klik, posisi, dan halaman mana yang terindeks.
- Bila bisa, uji manual di ChatGPT, Gemini, dan Perplexity dengan pertanyaan target (mis. "cara daftar payment gateway", "payment gateway untuk website") dan catat apakah wuzzpay.com dikutip.

## Cara membaca data

| Temuan | Tindakan |
|---|---|
| Halaman belum terindeks | Periksa sitemap, tautan internal, dan Request Indexing; jangan menambah artikel dulu. |
| Terindeks, impresi rendah | Perkuat tautan internal dan mention eksternal; jangan menulis ulang. |
| Impresi ada, klik rendah | Perbaiki title dan description. |
| Posisi 8 sampai 20 untuk satu query | Perdalam halaman itu (bagian baru, tabel, FAQ), bukan membuat halaman baru. |
| Query baru yang tidak kita duga | Pertimbangkan artikel khusus untuk query itu. |

## Kandidat pekerjaan (urutan awal, tentukan dari data)

1. **Payment gateway terbaik:** kerangka kriteria memilih berdasarkan kasus penggunaan, tanpa peringkat merek dan tanpa klaim terbaik untuk Wuzzpay.
2. **Tautan balik dari panduan lama ke artikel baru** (QRIS & VA, MDR, SaaS, failover, TSP). Mengubah halaman lama berarti memperbarui `lastmod` sitemap.
3. **Mention eksternal:** komunitas developer, direktori startup, media, dan profil perusahaan dengan nama dan deskripsi (TSP) yang konsisten. Ini penentu terbesar untuk head term dan sitasi AI.
4. **Sinyal kepercayaan:** halaman tim atau penulis, tanggal pembaruan yang terlihat, dan rujukan regulasi. Nomor PBI hanya dirujuk setelah diverifikasi dari sumber Bank Indonesia.
5. **Artikel turunan long-tail** dari query nyata di Search Console, misalnya syarat dan dokumen KYC, atau perbandingan QRIS, VA, dan e-wallet untuk toko online.
6. **Plugin atau tautan pembayaran:** bila Wuzzpay nanti menyediakannya, tambahkan ke artikel "untuk website" dan FAQ-nya.

## Batasan yang tetap berlaku

- Wuzzpay adalah TSP, bukan gateway dan bukan aggregator; jangan mengklaim "termurah" atau "terbaik".
- Tanpa perbandingan atau kata negatif soal merek lain. Penyebutan merek hanya di `alternatif-payment-gateway` (lihat `CLAUDE.md` dan `docs/tinjauan-legal.md`); halaman per merek tidak dibuat tanpa persetujuan pemilik proyek dan legal.
- Tanpa angka metrik, testimoni, atau nama gateway mitra.
- Artikel baru memakai kerangka halaman panduan yang ada, blok Meta Pixel, FAQ HTML identik dengan JSON-LD, dan didaftarkan di `sitemap.xml`, `llms.txt`, serta footer `index.html`.
- IndexNow hanya setelah deploy dan atas permintaan pemilik proyek.
