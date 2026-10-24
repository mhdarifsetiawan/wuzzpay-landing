// Memberi tahu mesin pencari yang mendukung IndexNow (Bing, Yandex, dll.) bahwa halaman baru atau berubah.
// Pakai SETELAH perubahan ter-deploy dan file kunci bisa dibuka di https://wuzzpay.com/<kunci>.txt
//
//   node scripts/indexnow.js            -> kirim semua URL di sitemap.xml
//   node scripts/indexnow.js URL [URL]  -> kirim URL tertentu saja
//   node scripts/indexnow.js --dry      -> tampilkan isi permintaan tanpa mengirim
const fs = require('fs');

const HOST = 'wuzzpay.com';
const keyFile = fs.readdirSync('.').find((n) => /^[0-9a-f]{32}\.txt$/.test(n));
if (!keyFile) throw new Error('File kunci IndexNow (32 hex .txt) tidak ditemukan di root.');
const key = keyFile.replace('.txt', '');
if (fs.readFileSync(keyFile, 'utf8').trim() !== key) throw new Error('Isi file kunci harus sama dengan nama file.');

const args = process.argv.slice(2);
const dry = args.includes('--dry');
let urls = args.filter((a) => a.startsWith('http'));
if (urls.length === 0) {
  const xml = fs.readFileSync('sitemap.xml', 'utf8');
  urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
}
const body = { host: HOST, key, keyLocation: `https://${HOST}/${key}.txt`, urlList: urls };

if (dry) {
  console.log(JSON.stringify(body, null, 2));
} else {
  fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  }).then((r) => console.log(`IndexNow: HTTP ${r.status} untuk ${urls.length} URL`));
}
