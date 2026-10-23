# Wuzzpay Landing Page

Situs statis untuk https://wuzzpay.com (HTML + Tailwind CSS + Alpine.js).

## Mengubah tampilan

CSS dibangun dari kelas Tailwind yang dipakai di file `.html`. Setelah menambah atau mengubah kelas Tailwind, bangun ulang CSS:

```bash
npm install        # sekali saja
npm run build:css  # menulis assets/css/tailwind.css
```

Konfigurasi warna dan font ada di `tailwind.config.js`. File `assets/css/tailwind.css` harus ikut di-commit.

Halaman `privacy.html`, `terms.html`, dan `refund-policy.html` memakai Tailwind v4 via CDN dan tidak ikut dibangun.
