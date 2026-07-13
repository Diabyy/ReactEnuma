# React Training 2 - Todo App

Project React + Vite sederhana untuk latihan pembuatan aplikasi daftar tugas (to-do list) dengan tampilan UI yang ringan dan fitur dasar CRUD.

## Fitur

- Menambahkan tugas baru melalui form input
- Mengedit deskripsi tugas yang sudah ada
- Menghapus tugas
- Menyimpan data ke localStorage agar data tetap ada saat halaman direload
- Dibangun menggunakan React dan Vite

## Teknologi yang Digunakan

- React 19
- Vite 8
- ESLint
- localStorage untuk penyimpanan data sederhana

## Prerequisites

Pastikan Anda sudah menginstall:

- Node.js (versi terbaru disarankan)
- npm atau pnpm

## Cara Menjalankan Project

1. Install dependency
   ```bash
   npm install
   ```

2. Jalankan development server
   ```bash
   npm run dev
   ```

3. Buka browser dan akses:
   ```text
   http://localhost:5173
   ```

## Script yang Tersedia

- `npm run dev` → menjalankan aplikasi dalam mode development
- `npm run build` → membuat build produksi
- `npm run preview` → melihat hasil build lokal
- `npm run lint` → menjalankan pengecekan ESLint

## Struktur Folder

- `src/` → source code utama aplikasi
  - `component/` → komponen UI seperti form, list, dan item tugas
  - `Hook/` → custom hook untuk mengelola state tugas
- `public/` → file statis

## Catatan

Aplikasi ini dibuat sebagai latihan belajar React, khususnya mengenai state management, custom hook, dan interaksi antar komponen.
