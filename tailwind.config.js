/** @type {import('tailwindcss').Config} */
module.exports = {
  // Halaman legal (privacy, terms, refund-policy) memakai Tailwind v4 via CDN sendiri.
  content: [
    './*.html',
    '!./privacy.html',
    '!./terms.html',
    '!./refund-policy.html',
    '!./startupranking*.html',
  ],
  theme: {
    extend: {
      colors: {
        biruTua: '#2A5C99',
        biruAksen: '#1D6FA3',
        biruLangit: '#56B5F0',
        biruAwan: '#D0E8F8',
        gelap: '#1E293B',
        sedang: '#475569',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 40px -15px rgba(42, 142, 202, 0.15)',
        float: '0 25px 50px -12px rgba(42, 92, 153, 0.1)',
      },
    },
  },
  plugins: [],
};
