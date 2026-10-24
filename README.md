# Wuzzpay Landing Page

Situs statis untuk https://wuzzpay.com (HTML + Tailwind CSS + Alpine.js).

## Mengubah tampilan

CSS dibangun dari kelas Tailwind yang dipakai di file `.html`. Setelah menambah atau mengubah kelas Tailwind, bangun ulang CSS:

```bash
npm install        # sekali saja
npm run build:css  # menulis assets/css/tailwind.css
```

Build juga memperbarui parameter `?v=` pada tautan CSS di semua halaman (cache-busting).

Konfigurasi warna dan font ada di `tailwind.config.js`. File `assets/css/tailwind.css` harus ikut di-commit.

Halaman `privacy.html`, `terms.html`, dan `refund-policy.html` memakai Tailwind v4 via CDN dan tidak ikut dibangun.

## IndexNow (Bing dan mesin pencari lain)

Setelah deploy, `npm run indexnow` memberi tahu mesin pencari tentang semua URL di `sitemap.xml`. Kunci ada di file `<32-hex>.txt` di root.
