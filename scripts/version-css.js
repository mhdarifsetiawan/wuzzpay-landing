// Menambahkan ?v=<hash> pada tautan assets/css/tailwind.css di semua halaman,
// supaya cache browser/CDN (mis. Cloudflare) tidak menyajikan CSS lama setelah build ulang.
const fs = require('fs');
const crypto = require('crypto');

const css = fs.readFileSync('assets/css/tailwind.css');
const hash = crypto.createHash('sha1').update(css).digest('hex').slice(0, 8);
const re = /assets\/css\/tailwind\.css(\?v=[0-9a-f]+)?"/g;

for (const f of fs.readdirSync('.').filter((n) => n.endsWith('.html'))) {
  const s = fs.readFileSync(f, 'utf8');
  const out = s.replace(re, `assets/css/tailwind.css?v=${hash}"`);
  if (out !== s) {
    fs.writeFileSync(f, out);
    console.log('versi CSS diperbarui:', f);
  }
}
console.log('hash CSS:', hash);
