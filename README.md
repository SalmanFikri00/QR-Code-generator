# 🎨 QR Code Generator with Style - Vibe Coding Edition

Sebuah aplikasi QR code generator berbasis React.js yang dibuat dengan claude 3.7 sonnet dengan trae ide dengan hanya beberapa prompt klompek di bantu chat gpt untuk membuat prompt yang lengkap. bahkan sebagian besar README.md ini dibuat oleh chatgpt dan anda masih bisa bilang ai tidak akan bisa megganti kan programmer kedepannya? see the future brooo........

---

## 🚀 Features

- ✅ Generate QR code dari teks atau URL
- 🎨 Kustomisasi warna (foreground & background)
- 🧩 Pilihan bentuk modul QR (dot, square, dll)
- 💾 Download QR code dalam format PNG
- 🧘‍♀️ Animasi smooth saat QR code muncul
- 🌙 UI clean dan modern, dibangun dengan Tailwind CSS
- 🧱 Komponen modular (Form input, QR preview, Customizer)

---

## 🛠️ Tech Stack

- **React.js** – frontend framework
- **Tailwind CSS** – untuk styling cepat dan responsive
- **qr-code-styling** – library powerful untuk desain QR
- **Vite / Create React App** – environment dev (tergantung preferensi)

---

## ⌨️ Prompt from Chatgpt


```bash
Buatkan saya sebuah aplikasi React.js yang bisa:

1. Meng-generate QR code dari input URL atau teks apa pun.
2. Menyediakan beberapa opsi desain QR code, seperti:
   - Warna (foreground dan background)
   - Bentuk modul (dot, square, dll)
   - Style frame atau border
3. Hasil QR code bisa langsung diunduh sebagai PNG.
4. Tampilan clean dan modern, pakai Tailwind CSS.
5. Jika memungkinkan, tambahkan animasi ringan saat QR code muncul.
6. Jangan lupa buat komponen terpisah untuk:
   - Input form
   - Tampilan QR code
   - Customizer / setting desain
7. Libatkan library seperti `qrcode.react` atau `react-qr-code`, atau yang lebih fleksibel seperti `qr-code-styling`.

Tambahan:
- Gunakan React hooks (useState, useEffect)
- Kode modular, rapi, dan gampang dipahami
- Tolong buatkan juga preview QR code-nya real-time sesuai perubahan input/desain

```
---

## 📦 Instalasi

```bash
git clone https://github.com/SalmanFikri00/QR-Code-generator.git
cd QR-Code-generator
npm install
npm run dev
