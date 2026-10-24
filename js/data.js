/* =========================================================
   Data portfolio — edit bagian ini untuk mengganti konten.
   Setiap teks punya versi "id" (Indonesia) dan "en" (English).
   ========================================================= */

const portfolioData = {
  projects: [
    {
      num: "01",
      title: "Studio Nol",
      desc: {
        id: "Situs portofolio untuk studio desain independen dengan sistem grid editorial dan animasi yang halus.",
        en: "A portfolio site for an independent design studio, built on an editorial grid system with subtle motion."
      },
      tags: ["HTML", "CSS", "JavaScript"],
      year: "2025",
      link: "#"
    },
    {
      num: "02",
      title: "Kasir Kita",
      desc: {
        id: "Aplikasi kasir ringan untuk UMKM: kelola produk, catat transaksi, dan lihat laporan harian.",
        en: "A lightweight point-of-sale app for small businesses: manage products, record sales, and read daily reports."
      },
      tags: ["JavaScript", "PWA", "IndexedDB"],
      year: "2025",
      link: "#"
    },
    {
      num: "03",
      title: "Ruang Baca",
      desc: {
        id: "Katalog buku pribadi dengan pencarian instan, filter tag, dan mode gelap yang nyaman dibaca.",
        en: "A personal book catalogue with instant search, tag filters, and a dark mode made for comfortable reading."
      },
      tags: ["HTML", "CSS"],
      year: "2024",
      link: "#"
    },
    {
      num: "04",
      title: "Peta Rasa",
      desc: {
        id: "Panduan kuliner kota dalam bentuk peta interaktif dan kurasi tempat makan mingguan.",
        en: "A city food guide in the form of an interactive map and a weekly shortlist of places to eat."
      },
      tags: ["JavaScript", "Leaflet"],
      year: "2024",
      link: "#"
    }
  ],

  skills: [
    {
      title: { id: "Desain", en: "Design" },
      items: ["UI/UX Design", "Design System", "Tipografi", "Prototyping"]
    },
    {
      title: { id: "Pengembangan", en: "Development" },
      items: ["HTML & CSS", "JavaScript", "Responsive Layout", "Aksesibilitas"]
    },
    {
      title: { id: "Alat", en: "Tools" },
      items: ["Figma", "Git", "VS Code", "Vercel"]
    }
  ],

  experience: [
    {
      period: { id: "2023 — Sekarang", en: "2023 — Present" },
      role: { id: "Frontend Developer (Lepas)", en: "Frontend Developer (Freelance)" },
      org: { id: "Mandiri", en: "Independent" },
      desc: {
        id: "Membangun situs dan antarmuka untuk klien UMKM, studio, dan organisasi nirlaba — dari desain hingga peluncuran.",
        en: "Building sites and interfaces for small businesses, studios, and non-profits — from design through launch."
      }
    },
    {
      period: { id: "2021 — 2023", en: "2021 — 2023" },
      role: { id: "UI Designer", en: "UI Designer" },
      org: { id: "Studio Contoh", en: "Sample Studio" },
      desc: {
        id: "Merancang design system dan antarmuka produk untuk klien fintech dan edukasi, bekerja erat dengan tim engineering.",
        en: "Designed design systems and product interfaces for fintech and education clients, working closely with engineering."
      }
    },
    {
      period: { id: "2020 — 2021", en: "2020 — 2021" },
      role: { id: "Web Designer", en: "Web Designer" },
      org: { id: "Agensi Latihan", en: "Practice Agency" },
      desc: {
        id: "Mengerjakan situs kampanye, landing page, dan materi digital untuk peluncuran produk.",
        en: "Worked on campaign sites, landing pages, and digital materials for product launches."
      }
    }
  ],

  socials: [
    { label: "GitHub", handle: "@namakamu", href: "https://github.com/namakamu" },
    { label: "LinkedIn", handle: "in/namakamu", href: "https://linkedin.com/in/namakamu" },
    { label: "Instagram", handle: "@namakamu", href: "https://instagram.com/namakamu" },
    { label: "X", handle: "@namakamu", href: "https://x.com/namakamu" }
  ]
};

/* =========================================================
   Terjemahan antarmuka
   ========================================================= */

const translations = {
  id: {
    "skip": "Langsung ke konten",
    "nav.about": "Tentang",
    "nav.work": "Karya",
    "nav.skills": "Keahlian",
    "nav.experience": "Pengalaman",
    "nav.contact": "Kontak",
    "nav.menu": "Menu",
    "header.langLabel": "Pilih bahasa",

    "hero.eyebrow": "Portofolio — 2026",
    "hero.role": "Desainer & Pengembang",
    "hero.tagline": "Membangun antarmuka yang tajam, jujur, dan mudah dipakai — dari riset sampai baris kode terakhir.",
    "hero.ctaWork": "Lihat karya",
    "hero.ctaContact": "Hubungi saya",
    "hero.available": "Terbuka untuk proyek baru",
    "marquee.text": "TERBUKA UNTUK PROYEK BARU ✳ DESAIN & KODE ✳ KOLABORASI ✳",

    "section.about": "Tentang",
    "section.work": "Karya pilihan",
    "section.skills": "Keahlian",
    "section.experience": "Pengalaman",
    "section.contact": "Kontak",

    "about.lead": "Halo — saya seorang desainer dan pengembang yang suka bekerja di persimpangan antara bentuk dan fungsi.",
    "about.p1": "Selama beberapa tahun terakhir saya membantu studio, UMKM, dan tim produk membangun situs serta antarmuka yang tidak hanya enak dilihat, tapi juga cepat dan mudah digunakan.",
    "about.p2": "Pendekatan saya sederhana: pahami masalahnya, buang yang tidak perlu, lalu kerjakan sisanya dengan rapi. Saya percaya detail kecil — tipografi, jarak, dan kejelasan — adalah yang membedakan karya biasa dari yang berkesan.",
    "about.location.label": "Berbasis di",
    "about.location.value": "Jakarta, Indonesia",
    "about.focus.label": "Fokus",
    "about.focus.value": "Web design & frontend",
    "about.status.label": "Status",
    "about.status.value": "Terbuka untuk kerja sama",
    "about.portraitCaption": "Foto menyusul — ini placeholder",

    "project.view": "Lihat proyek",

    "contact.intro": "Punya proyek, ide, atau sekadar mau menyapa? Kirim email — saya biasanya membalas dalam satu hingga dua hari.",
    "contact.socialsLabel": "Tautan sosial",

    "footer.note": "Dibuat dengan HTML, CSS, dan JavaScript murni.",
    "footer.top": "Kembali ke atas ↑",

    "noscript": "Aktifkan JavaScript untuk melihat daftar proyek, keahlian, dan pengalaman."
  },

  en: {
    "skip": "Skip to content",
    "nav.about": "About",
    "nav.work": "Work",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "header.langLabel": "Choose language",

    "hero.eyebrow": "Portfolio — 2026",
    "hero.role": "Designer & Developer",
    "hero.tagline": "Building interfaces that are sharp, honest, and easy to use — from research to the last line of code.",
    "hero.ctaWork": "See the work",
    "hero.ctaContact": "Get in touch",
    "hero.available": "Open for new projects",
    "marquee.text": "OPEN FOR NEW PROJECTS ✳ DESIGN & CODE ✳ COLLABORATION ✳",

    "section.about": "About",
    "section.work": "Selected work",
    "section.skills": "Skills",
    "section.experience": "Experience",
    "section.contact": "Contact",

    "about.lead": "Hello — I'm a designer and developer who likes to work at the intersection of form and function.",
    "about.p1": "Over the past few years I've helped studios, small businesses, and product teams build sites and interfaces that are not only good to look at, but fast and easy to use.",
    "about.p2": "My approach is simple: understand the problem, remove what isn't needed, then craft the rest with care. I believe the small details — typography, spacing, and clarity — are what separate ordinary work from memorable work.",
    "about.location.label": "Based in",
    "about.location.value": "Jakarta, Indonesia",
    "about.focus.label": "Focus",
    "about.focus.value": "Web design & frontend",
    "about.status.label": "Status",
    "about.status.value": "Open to collaboration",
    "about.portraitCaption": "Photo coming soon — placeholder",

    "project.view": "View project",

    "contact.intro": "Got a project, an idea, or just want to say hi? Send an email — I usually reply within one or two days.",
    "contact.socialsLabel": "Social links",

    "footer.note": "Built with plain HTML, CSS, and JavaScript.",
    "footer.top": "Back to top ↑",

    "noscript": "Enable JavaScript to see the project list, skills, and experience."
  }
};
