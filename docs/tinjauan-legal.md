# Bahan Tinjauan Legal: Terms, Refund Policy, Privacy

Tanggal: 2026-10-29. Status: teks sudah diselaraskan di repo, menunggu persetujuan pihak legal.

## Posisi yang dipakai di seluruh situs

- Wuzzpay adalah Technical Service Provider (TSP) / Penyelenggara Penunjang, bukan aggregator dan bukan PJP berizin. Saat ini tidak ada skema aggregator.
- Wuzzpay tidak menampung, menahan, atau meneruskan dana merchant. Penyelesaian dana dilakukan langsung oleh gateway mitra berlisensi Bank Indonesia ke rekening bank merchant, mengikuti skema gateway.
- Kewajiban KYC/CDD ada di gateway mitra. Wuzzpay membantu menjembatani dan menyederhanakan pengumpulan dokumen KYC.
- Nama gateway mitra tidak ditampilkan di halaman publik maupun halaman legal.

## Perubahan pada dokumen legal (sudah diterapkan)

| Berkas | Perubahan |
|---|---|
| `terms.html` §02 | "Murni TSP / entitas non-lisensi" diganti Penyelenggara Penunjang (bukan PJP berizin); nama Winpay, Espay, iPaymu dihapus; kalimat settlement oleh gateway mitra ke rekening merchant. |
| `refund-policy.html` §01, §03 | Judul "Non-Custodial" diganti "Alur Dana dan Pengembalian Dana"; "pemegang sah dana" dihapus; refund ditransfer langsung oleh gateway mitra; Wuzzpay hanya menyampaikan instruksi. |
| `privacy.html` §02, §05 | KYC: Wuzzpay membantu mengumpulkan dan meneruskan dokumen, verifikasi oleh gateway; "platform aggregator" diganti TSP; nama mitra dihapus. |

Tanggal "Terakhir diperbarui" di ketiga halaman diisi 29 Oktober 2026 (tanggal perubahan teks, bukan tanggal persetujuan legal).

## Pertanyaan untuk pihak legal

1. Rujukan PBI Nomor 23/6/PBI/2021 sudah dicek ke teks di situs Bank Indonesia: peraturan itu memang mengatur PJP dan mendefinisikan Penyelenggara Penunjang sebagai pihak yang bekerja sama dengan PJP/PIP untuk menunjang jasa sistem pembayaran (kegiatan: penyediaan teknologi pemrosesan transaksi dan layanan penunjang lain). Belum dicek apakah ada perubahan setelahnya; legal tetap perlu memastikan versi berlaku dan apakah kegiatan Wuzzpay (perutean transaksi, bantuan pengumpulan dokumen KYC) masuk kategori itu.
2. Apakah nama mitra perlu tertulis di dokumen kontrak (lampiran atau saat onboarding), tetapi tidak di halaman publik?
3. Apakah klausul refund dan sengketa (§02 refund-policy: komplain "satu pintu" lewat Wuzzpay) sudah cukup jelas bahwa Wuzzpay hanya mengawal komunikasi, bukan memproses dana?
4. Apakah frasa "Merchant wajib membebaskan PT Semantic Digital Nusantara dari tuntutan" dan batasan tanggung jawab di `terms.html` sudah sesuai?

## Bila skema aggregator diluncurkan

Seluruh teks perlu ditinjau ulang: halaman publik, FAQ dan JSON-LD, `llms.txt`, ketiga halaman legal, dan `CLAUDE.md`.
