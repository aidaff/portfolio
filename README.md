# Portfolio

Situs portofolio pribadi dengan gaya editorial / brutalist. Dibuat dengan HTML, CSS, dan JavaScript murni — tanpa build step dan tanpa dependency.

## Menjalankan

Buka `index.html` langsung di browser, atau jalankan server lokal:

```bash
python3 -m http.server 8000
```

Lalu buka <http://localhost:8000>.

## Struktur

```
index.html        Markup halaman
css/style.css     Semua styling (token warna & font di bagian :root)
js/data.js        Konten: proyek, keahlian, pengalaman, sosial, terjemahan
js/main.js        Render konten, toggle bahasa, menu mobile, animasi
```

## Mengganti konten

Hampir semua konten ada di `js/data.js`:

- `portfolioData.projects` — judul, deskripsi (`id` / `en`), tag, tahun, link
- `portfolioData.skills` — grup keahlian dan isinya
- `portfolioData.experience` — periode, peran, organisasi, deskripsi
- `portfolioData.socials` — label, handle, URL
- `translations` — teks antarmuka untuk Bahasa Indonesia dan Inggris

Teks statis di `index.html` memakai atribut `data-i18n="kunci"` yang merujuk ke `translations`.

Untuk mengganti nama, ubah judul hero di `index.html` (`.hero-line`), judul `<title>`, brand `NK`, dan inisial di bagian Tentang. Email ada di tautan `.contact-mail`.

## Kustomisasi visual

Di `css/style.css`, bagian `:root`:

```css
--ink: #111111;      /* warna teks & garis */
--paper: #f7f5ef;    /* latar */
--accent: #d8ff00;   /* satu warna aksen */
```

Font dimuat dari Google Fonts (Archivo Black, Space Grotesk, JetBrains Mono) dengan fallback sistem jika offline.

## Bahasa

Toggle `ID / EN` di header menyimpan pilihan ke `localStorage`. Saat pertama dibuka, bahasa mengikuti bahasa browser. Untuk memaksa bahasa lewat URL, tambahkan `?lang=id` atau `?lang=en`.

## Deploy

Karena situs statis, bisa diunggah ke GitHub Pages, Netlify, Vercel, atau hosting statis apa pun — cukup unggah seluruh folder.
