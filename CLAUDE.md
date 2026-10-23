# Wuzzpay Landing Page: panduan untuk AI dan kontributor

Situs statis (HTML + Tailwind + Alpine.js) untuk https://wuzzpay.com, dihosting di GitHub Pages (`CNAME`). Bahasa konten: Indonesia. Baca file ini sebelum mengubah apa pun.

## Build CSS (wajib)

- CSS dibangun dari kelas Tailwind yang dipakai di HTML. **Setelah menambah atau mengubah kelas Tailwind, jalankan `npm run build:css` lalu commit `assets/css/tailwind.css`.** Kalau lupa, kelas baru tidak punya gaya.
- Konfigurasi warna dan font ada di `tailwind.config.js` (jangan taruh konfigurasi Tailwind inline di HTML).
- `privacy.html`, `terms.html`, `refund-policy.html` memakai Tailwind v4 via CDN dan **tidak** ikut dibangun.
- Jangan memasang kembali Tailwind CDN atau Font Awesome pada halaman utama. Ikon memakai SVG inline.

## Halaman dan tautan

- Halaman terindeks: `index.html`, `biaya-transaksi.html`, `tentang-wuzzpay.html`, dan enam halaman panduan (`apa-itu-payment-orchestration`, `payment-gateway-down`, `cara-menerima-pembayaran-qris-va`, `payment-gateway-vs-aggregator-vs-tsp`, `cara-menghitung-biaya-payment-gateway-mdr`, `cara-integrasi-pembayaran-aplikasi-saas`).
- Halaman legal (`privacy`, `terms`, `refund-policy`) sengaja `noindex` dan tidak ada di sitemap. **Jangan ubah isinya tanpa tinjauan pihak legal.**
- Tautan antar halaman memakai path relatif (`index.html#pricing`), bukan `/#pricing`, agar jalan saat dibuka sebagai file lokal. Kanonik tetap `https://wuzzpay.com/...`.
- Tombol "Daftar" dan "Masuk" mengarah ke `https://my.wuzzpay.com`. Pertanyaan dan permintaan dokumentasi tetap lewat WhatsApp (`6289504121521`).

## Aturan konten dan klaim (penting)

- **Jangan menulis klaim yang belum terbukti:** tidak ada "99.9% uptime", "<200 ms", "anti-gagal", "24/7", testimoni, atau jumlah merchant. Pakai "mengurangi risiko", bukan "menjamin".
- **Alur dana dan peran Wuzzpay bersifat netral:** Wuzzpay dapat berperan sebagai TSP atau aggregator tergantung skema gateway mitra; alur dana mengikuti skema gateway; lisensi PJP Bank Indonesia melekat pada gateway mitra. **Jangan** menulis "tidak menahan dana" atau "dana langsung ke rekening" sebagai klaim mutlak.
- **Jangan menyebut nama gateway mitra** di halaman publik (Winpay, Espay, iPaymu, dll.). Detail dijawab tim lewat WhatsApp.
- Harga Rp 99.000 adalah **biaya aktivasi & integrasi sekali bayar, harga peluncuran, dapat berubah** (bisa gratis atau ada kupon). Jangan pakai harga coret atau hitung mundur. Jika harga berubah, perbarui kartu harga, FAQ, JSON-LD, `llms.txt`, dan halaman panduan biaya (angka di tabel dan titik impas Rp 571.000 ikut berubah bila tarif berubah).
- Istilah merek: pakai "jalur alternatif" dan "pengalihan otomatis" di teks merek. Variasi "gateway cadangan", "backup", "failover", "multi payment gateway" dipakai wajar di judul FAQ dan kalimat jawaban (satu sampai dua kali per halaman, tanpa menjejalkan).
- Ilustrasi hero dan gambar OG saat ini masih memuat angka metrik ("99.99%", "320 ms") tanpa bukti; ganti bila ada gambar baru.

## Aturan SEO dan AEO

Setiap halaman terindeks harus punya: satu `h1`, `<title>` maksimal sekitar 60 karakter dan unik, meta description 70 sampai 160 karakter dan unik, canonical, `hreflang`, Open Graph, Twitter Card, dan JSON-LD.

- **Teks pertanyaan dan jawaban FAQ di HTML (`<details>`) harus identik dengan `FAQPage` di JSON-LD.** Ubah keduanya sekaligus.
- Halaman panduan baru: tambahkan ke `sitemap.xml` (dengan `lastmod`), `llms.txt`, dan footer "Jelajahi" di `index.html`, serta tautkan dari halaman terkait. Salin kerangka dari halaman panduan yang ada (header dengan "Masuk" dan "Daftar Sekarang", `assets/css/tailwind.css`, footer), bukan dari sumber lain. Ikuti struktur halaman panduan yang ada: jawaban singkat di atas, bagian bertajuk pertanyaan, tabel perbandingan bila relevan, bagian "Posisi/Pendekatan Wuzzpay", lalu FAQ.
- Perbarui `lastmod` di `sitemap.xml` untuk halaman yang berubah.
- Jangan mengubah tarif di `biaya-transaksi.html` tanpa menyamakan semua halaman yang mengutipnya (QRIS 0,7%, VA Rp 4.000 flat, kartu kredit 2,9% + Rp 2.000, dan seterusnya).

## Git

- Jangan push tanpa diminta. Commit pesan singkat berbahasa Indonesia, dipisah per topik.
