# Wuzzpay Landing Page: panduan untuk AI dan kontributor

Situs statis (HTML + Tailwind + Alpine.js) untuk https://wuzzpay.com, dihosting di GitHub Pages (`CNAME`). Bahasa konten: Indonesia. Baca file ini sebelum mengubah apa pun.

## Build CSS (wajib)

- CSS dibangun dari kelas Tailwind yang dipakai di HTML. **Setelah menambah atau mengubah kelas Tailwind, jalankan `npm run build:css` lalu commit `assets/css/tailwind.css`.** Kalau lupa, kelas baru tidak punya gaya. Skrip build otomatis menambahkan `?v=<hash>` pada tautan CSS di semua halaman (lewat `scripts/version-css.js`) agar cache Cloudflare tidak menyajikan CSS lama; jangan hapus parameter itu. Bila mengganti isi gambar tanpa mengganti nama file, tambahkan atau naikkan `?v=` pada URL gambarnya di HTML.
- Konfigurasi warna dan font ada di `tailwind.config.js` (jangan taruh konfigurasi Tailwind inline di HTML).
- `privacy.html`, `terms.html`, `refund-policy.html` memakai Tailwind v4 via CDN dan **tidak** ikut dibangun.
- Jangan memasang kembali Tailwind CDN atau Font Awesome pada halaman utama. Ikon memakai SVG inline.
- Aksesibilitas: warna `biruAksen` (#1D6FA3) dipilih agar kontras teks putih di atasnya minimal 4,5:1 (WCAG AA); jangan diterangkan kembali ke #2A8ECA. Gunakan `text-red-700`, bukan `red-500`, untuk teks merah.
- Aset header memakai `assets/LOGO-sm.webp` (600 px); `assets/LOGO.png` (1200 px) dipakai untuk JSON-LD. Font Plus Jakarta Sans di-host sendiri (`assets/fonts/plus-jakarta-sans-latin.woff2`, `@font-face` di `src/input.css`, preload di setiap halaman); jangan kembali ke Google Fonts. Gambar hero di beranda memakai `loading="lazy"` agar tidak diunduh di layar kecil tempat gambar itu disembunyikan.

## Halaman dan tautan

- Halaman terindeks: `index.html`, `biaya-transaksi.html`, `tentang-wuzzpay.html`, dan delapan halaman panduan (`apa-itu-payment-orchestration`, `payment-gateway-down`, `memilih-payment-gateway-dengan-failover`, `kapan-perlu-gateway-kedua`, `cara-menerima-pembayaran-qris-va`, `payment-gateway-vs-aggregator-vs-tsp`, `cara-menghitung-biaya-payment-gateway-mdr`, `cara-integrasi-pembayaran-aplikasi-saas`).
- Halaman legal (`privacy`, `terms`, `refund-policy`) sengaja `noindex` dan tidak ada di sitemap. **Jangan ubah isinya tanpa tinjauan pihak legal.**
- Tautan antar halaman memakai path relatif (`index.html#pricing`), bukan `/#pricing`, agar jalan saat dibuka sebagai file lokal. Kanonik tetap `https://wuzzpay.com/...`.
- Tombol "Daftar" dan "Masuk" mengarah ke `https://my.wuzzpay.com`. Pertanyaan dan permintaan dokumentasi tetap lewat WhatsApp (`6289504121521`).

## Aturan konten dan klaim (penting)

- **Jangan menulis klaim yang belum terbukti:** tidak ada "99.9% uptime", "<200 ms", "anti-gagal", "24/7", testimoni, atau jumlah merchant. Pakai "mengurangi risiko", bukan "menjamin".
- **Peran dan alur dana:** Wuzzpay adalah TSP (Technical Service Provider), bukan aggregator dan bukan PJP; saat ini tidak ada skema aggregator. Penyelesaian dana dilakukan langsung oleh gateway mitra berlisensi Bank Indonesia ke rekening bank merchant, dan lisensi PJP melekat pada gateway mitra. Wuzzpay hanya membantu menjembatani pengumpulan dokumen KYC; verifikasi dan kewajiban KYC/CDD ada di gateway. Jangan menulis Wuzzpay "mencairkan dana", dana "melalui Wuzzpay", atau "Wuzzpay mengurus KYC". Bila skema aggregator diluncurkan, tinjau ulang semua halaman dan dokumen legal.
- **Jangan menyebut nama gateway mitra** di halaman publik (Winpay, Espay, iPaymu, dll.). Detail dijawab tim lewat WhatsApp.
- Harga Rp 99.000 adalah **biaya aktivasi & integrasi sekali bayar, harga peluncuran, dapat berubah** (bisa gratis atau ada kupon). Jangan pakai harga coret atau hitung mundur. Jika harga berubah, perbarui kartu harga, FAQ, JSON-LD, `llms.txt`, dan halaman panduan biaya (angka di tabel dan titik impas Rp 571.000 ikut berubah bila tarif berubah).
- Istilah merek: pakai "jalur alternatif" dan "pengalihan otomatis" di teks merek. Variasi "gateway cadangan", "backup", "failover", "multi payment gateway" dipakai wajar di judul FAQ dan kalimat jawaban (satu sampai dua kali per halaman, tanpa menjejalkan).
- Ilustrasi hero dan gambar OG saat ini masih memuat angka metrik ("99.99%", "320 ms") tanpa bukti; ganti bila ada gambar baru.

## Aturan SEO dan AEO

Setiap halaman terindeks harus punya: satu `h1`, `<title>` maksimal sekitar 60 karakter dan unik, meta description 70 sampai 160 karakter dan unik, canonical, `hreflang`, Open Graph, Twitter Card, dan JSON-LD.

- **Teks pertanyaan dan jawaban FAQ di HTML (`<details>`) harus identik dengan `FAQPage` di JSON-LD.** Ubah keduanya sekaligus.
- Halaman panduan baru: tambahkan ke `sitemap.xml` (dengan `lastmod`), `llms.txt`, dan footer "Jelajahi" di `index.html`, serta tautkan dari halaman terkait. Salin kerangka dari halaman panduan yang ada (header dengan "Masuk" dan "Daftar Sekarang", `assets/css/tailwind.css`, footer), bukan dari sumber lain. Ikuti struktur halaman panduan yang ada: jawaban singkat di atas, bagian bertajuk pertanyaan, tabel perbandingan bila relevan, bagian "Posisi/Pendekatan Wuzzpay", lalu FAQ.
- Perbarui `lastmod` di `sitemap.xml` untuk halaman yang berubah, format ISO 8601 dengan jam dan zona (`2026-10-24T17:57:58+07:00`); isi hanya saat konten benar-benar berubah.
- Jangan mengubah tarif di `biaya-transaksi.html` tanpa menyamakan semua halaman yang mengutipnya (QRIS 0,7%, VA Rp 4.000 flat, kartu kredit 2,9% + Rp 2.000, dan seterusnya).

## Meta Pixel

- Pixel ID `1664296028753513` dipasang inline di `<head>` 11 halaman terindeks (blok `<!-- Meta Pixel Code -->`), tepat sebelum `</head>`. Halaman legal (`privacy`, `terms`, `refund-policy`) dan `startupranking*.html` sengaja tidak dipasangi.
- Event: `PageView` di setiap halaman; `Contact` saat klik tautan WhatsApp (`api.whatsapp.com`); `Lead` saat klik tautan ke `my.wuzzpay.com` yang teksnya mengandung "Daftar" (tombol "Masuk" tidak mengirim event). Semuanya lewat satu listener klik di blok yang sama.
- **Halaman terindeks baru wajib menyalin blok Pixel ini** dari halaman panduan yang ada, bersama kerangka lainnya.
- Belum ada spanduk persetujuan cookie, dan `privacy.html` belum menyebut Pixel; keduanya menunggu tinjauan legal. Perhatian untuk peninjau legal: `privacy.html` (bagian tentang pihak ketiga) menjanjikan data tidak diberikan ke pihak ketiga "untuk tujuan komersial atau periklanan", sedangkan Pixel mengirim data kunjungan ke Meta. Redaksinya perlu diselaraskan (misalnya dengan pengecualian untuk data kunjungan situs, bukan data transaksi) sebelum Pixel dianggap sesuai kebijakan. Isi `privacy.html` sendiri tidak diubah tanpa tinjauan legal.

## Pemberitahuan ke mesin pencari (IndexNow)

- Kunci IndexNow ada di file `<32-hex>.txt` di root (isinya sama dengan nama file); jangan dihapus atau diganti tanpa mengubah `scripts/indexnow.js`.
- Setelah halaman baru atau perubahan besar **ter-deploy**, jalankan `npm run indexnow` (semua URL di sitemap) atau `node scripts/indexnow.js <URL>` (URL tertentu). Gunakan `--dry` untuk melihat isi permintaan tanpa mengirim. Ini mengirim data ke layanan eksternal, jadi jalankan hanya atas permintaan pemilik proyek.

## Git

- Jangan push tanpa diminta. Commit pesan singkat berbahasa Indonesia, dipisah per topik.
