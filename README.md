<!-- 🪜 MENYIMPAN PROJEK KE GITHUB -->
🔹 1. Buat Repository di GitHub
Login ke akun GitHub

Klik tombol “+” di pojok kanan atas → pilih “New repository”

Isi:

Repository name: contoh my-project

Description (opsional)

Pilih Public atau Private

Jangan centang "Initialize with a README" jika kamu sudah punya file lokal

Klik Create repository

2. Inisialisasi Git di Folder proyek
KETIK :

git init

git remote add origin

git add .

git commit -m "nama commit"

git branch -M main

git push -u origin main

<!-- SELESAI MENYMPAN PROYEK DI GITHUB -->

<!-- Menghosting proyek (Dalam hal ini kita menggunakan vercel) -->
1. Kunjungi https://vercel.com
melakukan signup dengan cara menautkan akun github
melakukan login pertama

2. Import Project dari GitHub
Setelah login:

Klik tombol “Add New...” → “Project”

Klik “Import Git Repository”

Vercel akan meminta akses ke GitHub → Izinkan dan pilih repositori yang ingin dihosting

Pilih repository yang sudah kamu buat tadi (misalnya: my-project)

3. Setting Project
Nama proyek → otomatis, bisa diubah

Framework Preset → pilih sesuai project kamu:

React, Next.js, Vue, atau pilih “Other” jika itu hanya HTML/CSS/JS biasa

Jika kamu hanya punya file HTML/CSS/JS biasa, isi:

Output Directory = . (titik, artinya folder root)

4. Deploy!
Klik “Deploy”

Tunggu proses build & deploy hingga sukses

SETELAH BERHASIL LINK DOMAIN AKAN MUNCUL

<!-- SELESAI -->


