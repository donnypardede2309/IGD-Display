<template>
  <div class="main-content">
    <!-- ================= HEADER ================= -->
    <div class="header-content">
      <div class="rectangle_main">
        <div class="text-wrapper">
          <h1>SELAMAT DATANG DI RUMAH SAKIT UMUM HKBP BALIGE</h1>
          <p>WELCOME TO HKBP BALIGE GENERAL HOSPITAL</p>
        </div>

        <div class="rectangle_one"></div>

        <div class="rectangle_two">
          <div class="text-wrapper-2">
            <h1>Jalan Gereja No.17, Balige, Toba | 22314</h1>
            <p>0852-7655-3672 | 0853-5884-8964</p>
            <p>rshkbp@yahoo.com</p>
          </div>
        </div>

        <div class="circle"></div>
      </div>
    </div>

    <!-- ================= NAVBAR ================= -->
    <div class="data-navigator">
      <nav class="navbar">
        <div class="nav-container">
          <a
            class="nav-item"
            :class="{ active: activeSection === 'igd' }"
            @click="setSection('igd')"
            >Pasien IGD</a
          >
          <a
            class="nav-item"
            :class="{ active: activeSection === 'laboratorium' }"
            @click="setSection('laboratorium')"
            >Laboratorium</a
          >
          <a
            class="nav-item"
            :class="{ active: activeSection === 'radiologi' }"
            @click="setSection('radiologi')"
            >Radiologi</a
          >
          <a
            class="nav-item"
            :class="{ active: activeSection === 'rawat-inap' }"
            @click="setSection('rawat-inap')"
            >Rawat Inap</a
          >
          <a
            class="nav-item"
            :class="{ active: activeSection === 'pulang' }"
            @click="setSection('pulang')"
            >Pasien Pulang</a
          >
        </div>
      </nav>
    </div>

    <!-- ================= TABLE ================= -->
    <div class="table-container">
      <transition name="fade">
        <!-- ================= IGD ================= -->
        <section v-if="activeSection === 'igd'">
          <h2>Data Pasien IGD</h2>
          <table class="custom-table">
            <thead class="igd-table-header">
              <tr>
                <th>Nama</th>
                <th>Alamat</th>
                <th>Jenis</th>
                <th>Tanggal</th>
                <th>Jam</th>
                <th>Status</th>
                <th>Ruangan</th>
                <th>No TT</th>
              </tr>
            </thead>
            <tbody ref="scrollContainer">
              <tr v-for="(p, index) in filteredData" :key="index" :class="{ 'row-new': index === 0 }">
                <td>{{ p.nama }}</td>
                <td>{{ p.alamat }}</td>
                <td>{{ p.jenis }}</td>
                <td>{{ p.tanggalMasuk }}</td>
                <td>{{ p.jamMasuk }}</td>
                <td>{{ p.status }}</td>
                <td>{{ p.ruangan || "IGD" }}</td>
                <td>{{ p.nomorTempatTidur }}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </transition>

      <transition name="fade">
        <!-- ================= LAB ================= -->
        <section v-if="activeSection === 'laboratorium'">
          <h2>Data Pasien Laboratorium</h2>
          <table class="custom-table">
            <thead class="laboratorium-table-header">
              <tr>
                <th>Nama</th>
                <th>Alamat</th>
                <th>Jenis</th>
                <th>Tanggal</th>
                <th>Jam</th>
                <th>Status</th>
                <th>Ruangan</th>
                <th>No TT</th>
              </tr>
            </thead>
            <tbody ref="scrollContainer">
               <tr v-for="(p, index) in filteredData" :key="index" :class="{ 'row-new': index === 0 }">
                <td>{{ p.nama }}</td>
                <td>{{ p.alamat }}</td>
                <td>{{ p.jenis }}</td>
                <td>{{ p.tanggalMasuk }}</td>
                <td>{{ p.jamMasuk }}</td>
                <td>{{ p.status }}</td>
                <td>Laboratorium</td>
                <td>{{ p.nomorTempatTidur }}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </transition>

      <transition name="fade">
        <!-- ================= RADIOLOGI ================= -->
        <section v-if="activeSection === 'radiologi'">
          <h2>Data Pasien Radiologi</h2>
          <table class="custom-table">
            <thead class="radiologi-table-header">
              <tr>
                <th>Nama</th>
                <th>Alamat</th>
                <th>Jenis</th>
                <th>Tanggal</th>
                <th>Jam</th>
                <th>Status</th>
                <th>Ruangan</th>
                <th>No TT</th>
              </tr>
            </thead>
            <tbody ref="scrollContainer">
               <tr v-for="(p, index) in filteredData" :key="index" :class="{ 'row-new': index === 0 }">
                <td>{{ p.nama }}</td>
                <td>{{ p.alamat }}</td>
                <td>{{ p.jenis }}</td>
                <td>{{ p.tanggalMasuk }}</td>
                <td>{{ p.jamMasuk }}</td>
                <td>{{ p.status }}</td>
                <td>Radiologi</td>
                <td>{{ p.nomorTempatTidur }}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </transition>

      <!-- ================= RAWAT INAP ================= -->
      <section v-if="activeSection === 'rawat-inap'">
        <h2>Data Pasien Rawat Inap</h2>
        <table class="custom-table">
          <thead class="rawat-inap-table-header">
            <tr>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Jenis</th>
              <th>Tanggal</th>
              <th>Jam</th>
              <th>Status</th>
              <th>Ruangan</th>
              <th>No TT</th>
            </tr>
          </thead>
          <tbody ref="scrollContainer">
             <tr v-for="(p, index) in filteredData" :key="index" :class="{ 'row-new': index === 0 }">
              <td>{{ p.nama }}</td>
              <td>{{ p.alamat }}</td>
              <td>{{ p.jenis }}</td>
              <td>{{ p.tanggalMasuk }}</td>
              <td>{{ p.jamMasuk }}</td>
              <td>{{ p.status }}</td>
              <td>{{ p.ruangan }}</td>
              <td>{{ p.nomorTempatTidur }}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <transition name="fade">
        <!-- ================= PULANG ================= -->
        <section v-if="activeSection === 'pulang'">
          <h2>Data Pasien Pulang</h2>
          <table class="custom-table">
            <thead class="pulang-table-header">
              <tr>
                <th>Nama</th>
                <th>Alamat</th>
                <th>Jenis</th>
                <th>Tanggal</th>
                <th>Jam</th>
                <th>Status</th>
                <th>Ruangan</th>
                <th>No TT</th>
              </tr>
            </thead>
            <tbody ref="scrollContainer">
               <tr v-for="(p, index) in filteredData" :key="index" :class="{ 'row-new': index === 0 }">
                <td>{{ p.nama }}</td>
                <td>{{ p.alamat }}</td>
                <td>{{ p.jenis }}</td>
                <td>{{ p.tanggalMasuk }}</td>
                <td>{{ p.jamMasuk }}</td>
                <td>{{ p.status }}</td>
                <td>Pulang</td>
                <td>{{ p.nomorTempatTidur }}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </transition>
    </div>

    <footer class="main-footer">
      <p>&copy; Created by Donny Pardede | RS HKBP Balige</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from "vue";
import { supabase } from "@/lib/supabase";

/* ================= STATE ================= */

const activeSection = ref("igd");
const daftarPasien = ref([]);
const highlightedIds = ref([]);
const sections = ["igd", "laboratorium", "radiologi", "rawat-inap", "pulang"];

let currentIndex = 0;
let channel = null;
let rotateInterval = null;
let scrollInterval = null;

const scrollContainer = ref(null);

/* ================= FETCH DATA ================= */

async function ambilData() {
  const { data, error } = await supabase
    .from("antrian")
    .select("*")
    .order("created_at", { ascending: false });

  if (!error && data) {
    daftarPasien.value = data.map((p) => ({
      id: p.id,
      nama: p.nama,
      alamat: p.alamat,
      jenis: p.jenis,
      tanggalMasuk: p.tanggal,
      jamMasuk: p.jam,
      nomorTempatTidur: p.no_TT,
      status: p.status,
      layanan: p.layanan,
      ruangan: p.ruangan,
    }));
  }
}

/* ================= FILTER ================= */

const filteredData = computed(() => {
  // ================= IGD =================
  if (activeSection.value === "igd") {
    return daftarPasien.value.filter(
      (p) => p.layanan !== "rawat-inap" && p.layanan !== "pulang",
    );
  }

  // ================= LAB =================
  if (activeSection.value === "laboratorium") {
    return daftarPasien.value.filter((p) => p.layanan === "laboratorium");
  }

  // ================= RADIOLOGI =================
  if (activeSection.value === "radiologi") {
    return daftarPasien.value.filter((p) => p.layanan === "radiologi");
  }

  // ================= RAWAT INAP =================
  if (activeSection.value === "rawat-inap") {
    return daftarPasien.value.filter((p) => p.layanan === "rawat-inap");
  }

  // ================= PULANG =================
  if (activeSection.value === "pulang") {
    return daftarPasien.value.filter((p) => p.layanan === "pulang");
  }

  return [];
});

/* ================= AUTO SCROLL ================= */

function startAutoScroll() {
  // Bersihkan interval yang lama agar tidak tumpang tindih
  clearInterval(scrollInterval);

  if ( filteredData.value.length <= 4 ) {
    let el = scrollContainer.value;
    if (Array.isArray(el)) el = el[0];
    if (el) el.scrollTop = 0;

    return;
  }

  // Jika lebih dari 5, jalankan interval seperti biasa
  scrollInterval = setInterval(() => {

    let el = scrollContainer.value;
    if (Array.isArray(el)) el = el[0];
    if (!el) return;

    const maxScroll = el.scrollHeight - el.clientHeight;

    // Jika tabel tidak perlu scroll (data sedikit), berhenti di sini
    if (maxScroll <= 0) return;

    // CEK: Jika sudah sampai di paling bawah
    if (el.scrollTop >= maxScroll - 2) {
      clearInterval(scrollInterval); // Hentikan gerakan scroll

      setTimeout(() => {
        if (el) {
          
          el.scrollTop = 0;

          // TUNGGU 3 DETIK DI ATAS
          
          setTimeout(() => {
            startAutoScroll(); // Jalankan kembali fungsi scroll
          }, 4000); 
        }
      }, 1000);

      return;
    }

    // Jalankan scroll perlahan (0.6 pixel setiap 16ms)
    el.scrollTop += 1;

  }, 40);
}

/* ================= AUTO ROTATE ================= */

function startAutoRotate() {
  clearInterval(rotateInterval);

  rotateInterval = setInterval(() => {
    nextSection();
  }, 20000); // waktu setiap section
}

watch(activeSection, async () => {
  await nextTick();

  const el = scrollContainer.value;
  if (!el) return;

  el.scrollTop = 0;

  startAutoScroll();
});

/* ================= SECTION CHANGE ================= */

function setSection(section) {
  activeSection.value = section;
}

function nextSection() {
  currentIndex++;

  if (currentIndex >= sections.length) {
    currentIndex = 0;
  }

  activeSection.value = sections[currentIndex];
}

watch(activeSection, (newVal) => {
  currentIndex = sections.indexOf(newVal);
});

/* ================= REALTIME ================= */

onMounted(async () => {
  await ambilData();
  startAutoRotate();
  startAutoScroll();
  document.body.style.overflow = "hidden";

  channel = supabase
    .channel("antrian-channel")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "antrian" },
      () => ambilData(),
    )
    .subscribe();
});

onUnmounted(() => {
  if (channel) supabase.removeChannel(channel);
  if (rotateInterval) clearInterval(rotateInterval);
  if (scrollInterval) clearInterval(scrollInterval);
  document.body.style.overflow = "auto";
});
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    font-family: "Poppins-Regular", Helvetica, sans-serif;
  }
</style>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #e2e2e3;
  font-family: "Poppins-Regular", Helvetica;
}

/* =======================================================
   1. MONITOR STANDAR & LAPTOP (Default / 1080p)
   ======================================================= */
@media (min-width: 1024px) {
  .text-wrapper h1 { font-size: 1.8rem; }
  .text-wrapper p { font-size: 1.1rem; }
  
  .table-container {
    flex-grow: 1; /* Ambil sisa ruang layar */
    height: auto; 
    margin: 10px 20px;
  }

  .custom-table td, .custom-table th {
    padding: 12px;
    font-size: 1rem;
  }
}

/* =======================================================
   2. MONITOR BESAR / TV 32-50 INCH (2K / QHD)
   ======================================================= */
@media (min-width: 1920px) {
  .rectangle_main { height: 300px; }
  
  .text-wrapper h1 { font-size: 2.5rem; }
  .text-wrapper-2 h1 { font-size: 2rem; }

  .nav-item { font-size: 1.4rem; }

  .custom-table td {
    padding: 18px;
    font-size: 1.3rem; /* Teks lebih besar agar terbaca jauh */
  }
}

/* =======================================================
   3. TV RAKSASA 72 INCH (4K / Ultra HD)
   ======================================================= */
@media (min-width: 3900px) {
  /* Skalakan seluruh layout */
  .rectangle_main { height: 450px; }
  .rectangle_one { width: 400px; height: 350px; }
  .rectangle_two { width: 1000px; height: 220px; top: 210px; }

  .text-wrapper h1 { font-size: 4.5rem; }
  .text-wrapper p { font-size: 2.5rem; }
  
  .text-wrapper-2 h1 { font-size: 3.5rem; }
  .text-wrapper-2 p { font-size: 2rem; }

  .nav-item { 
    font-size: 2.5rem; 
    padding: 20px 40px; 
  }

  .custom-table th { font-size: 2.8rem; padding: 30px; }
  .custom-table td { font-size: 2.8rem; padding: 30px;  height: 160px; padding: 20px 30px; }

  h2 { font-size: 3rem; border-left-width: 15px; }

  footer p { font-size: 1.8rem !important; }
}

.section {
  margin: 0px;
  padding: 0;
}

.hidden {
  display: none;
}

.action-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 120px;
}

label {
  font-size: 12px;
  font-weight: 500;
  color: #555;
}

.header-content {
  display: flex;
  flex-wrap: wrap;
  position: relative;
}

.rectangle_main {
  background-color:#4244e1f0;
  width: 100%;
  border-radius: 0 0 20px 20px;
  height: 256px;
  margin: 0 20px;
  box-shadow: 0px 4px 4px #00000040;
}

.rectangle_one {
  background-color: #4245e2c7;
  width: 260px;
  height: 220px;
  border-radius: 30px;
  margin: 18px;
}

.rectangle_two {
  background-color: #3c3ed8c7;
  width: 580px;
  height: 130px;
  border-radius: 20px 0 20px 20px;
  margin-left: auto;
  position: absolute;
  top: 127px;
  right: 20px;
}

.circle {
  background-color: #6567ed8c;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  right: 550px;
  position: absolute;
  top: 36px;
}

.text-wrapper {
  position: absolute;
  font-family: "Poppins-Regular", Helvetica;
  top: 10px;
  right: 40px;
  color: white;
  z-index: 1;
  text-align: right;
}

.text-wrapper h1 {
  font-weight: 100;
  padding-top: 10px;
}

.text-wrapper p {
  font-weight: 100;
  padding-top: 10px;
  font-size: 21px;
}

.text-wrapper-2 {
  position: absolute;
  font-family: "Poppins-Regular", Helvetica;
  top: 10px;
  right: 40px;
  padding-top: 10px;
  color: white;
  z-index: 1;
  text-align: right;
}

.text-wrapper-2 h1 {
  font-weight: 400;
  font-size: 28px;
  padding-bottom: 5px;
}

.text-wrapper-2 p {
  font-weight: 300;
  font-size: 18px;
  padding-top: 3px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.input-content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}

.input-wrapper {
  font-family: "Poppins-Regular", Helvetica;
  width: 700px;
}

.input-wrapper h1 {
  text-align: center;
  margin: 50px 0;
  font-weight: 600;
  color: #757575;
}

.input-wrapper p {
  font-family: "Poppins-Regular", Helvetica;
  color: #757575;
  text-align: left;
  margin: 20px 0px;
  font-weight: 300;
  font-size: 18px;
}

.input-wrapper input,
.input-wrapper select {
  width: 100%;
  height: 50px;
  padding: 14px 18px;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #757575;
  font-size: 16px;
  outline: none;
  transition: 0.3s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.input-wrapper input:focus,
.input-wrapper select:focus {
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
}

.input-wrapper input::placeholder,
.input-wrapper select::placeholder {
  color: #757575;
}

.button-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}

.button-wrapper button {
  margin: 10px 0;
  height: 50px;
  padding: 12px 24px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  font-weight: 600;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.button-wrapper button:hover {
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
}

.batal {
  background-color: #e04242c7;
}

.kirim {
  background-color: #42b72ac7;
}

.data-navigator {
  width: 100%;
  padding: 0 20px;
}

/* NAVBAR CONTAINER */
.navbar {
  width: 100%;
  background: #4244e1f0;
  border-radius: 20px;
  margin-top: 20px;
  padding: 14px 0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

/* FLEX CONTAINER */
.nav-container {
  width: 100%;
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

/* MENU ITEM */
.nav-item {
  text-decoration: none;
  color: white;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.5px;
  position: relative;
  padding: 6px 0;
  transition: 0.3s ease;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* Hover effect */
.nav-item:hover {
  opacity: 0.85;
}

/* Underline animation */
.nav-item::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0%;
  height: 2px;
  background: white;
  transition: width 0.4s ease;
}

.nav-item:hover::after {
  width: 100%;
}

.nav-item.active {
  color: white;
}

/* Active menu */
.nav-item.active::after {
  width: 100%;
}

.table-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  overflow: hidden;
  height: calc(100vh - 380px); 
  min-height: 300px;
  width: 97%;
  position: relative;
}

.table-container section{
  display: flex;
  flex-direction: column;
  height: 100%;
}

.table-container::after {
  content: "";
  display: block;
  height: 150px; /* space bawah */
}

.custom-table {
  display: flex;
  flex-direction: column;
  table-layout: fixed;
  height: 100%;
  width: 100%;
  border-collapse: collapse;
  font-family: "Lora", serif;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  display: block;
}

.table-container section h2 { 
  position: sticky;
  top: 0;
  z-index: 10;
  background: #e2e2e3;
  padding-top: 5px;
  padding-bottom: 10px;
}

.custom-table thead th {
  position: sticky;
  top: 0;
  z-index: 5;
  font-size: 28px;
}

.custom-table tbody {
  display: block;
  height: 100%;
  overflow-y: hidden;
  width: 100%;
  font-size: 28px;
  font-weight: 500;
}

.custom-table thead {
  flex-shrink: 0;
  display: table;
  width: 100%;
  table-layout: fixed;
}

.custom-table thead,
.custom-table tr{
  display: table;
  width: 100%;
  table-layout: fixed;
}

.custom-table tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}

.custom-table tbody{
  flex: 1;
  display: block;
  overflow-y: hidden; 
  font-size: 20px;
  will-change: scroll-position;
  -webkit-overflow-scrolling: touch;
  width: 100%;
}

.custom-table{
  scroll-behavior: smooth;
}

.custom-table th {
  padding: 14px;
  text-align: left;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: white;
}

/* Body */
.custom-table td {
  word-break: break-word;
  padding: 14px;
  border-bottom: 1px solid #eee;
  font-family: "Poppins-Regular", Helvetica;
  font-size: 28px;
}

.custom-table td:nth-child(2) {
  max-width: 220px;
  white-space: normal;
}
th {
  font-family: "Poppins-Regular", Helvetica;
}

.custom-table tbody tr{
  transition: background 0.2s ease;
}

/* Hover row */
.custom-table tbody tr:hover {
  background: #f5f7ff;
  transition: 0.2s;
}

@keyframes highlight-new {
  0% { background-color: #fff9c4; } /* Warna kuning muda */
  100% { background-color: transparent; }
}

.row-new {
  animation: highlight-new 3s ease-out;
  border-left: 5px solid #4244e1; /* Tandai dengan garis biru di samping */
}

/* Status badge */
.status {
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
}

.status.aktif {
  background: #e6f7ec;
  color: #1e7e34;
}

.status.selesai {
  background: #e6f0ff;
  color: #2c3e94;
}

/* Buttons */
.btn-edit {
  padding: 6px 12px;
  border: none;
  background: #3b4cca;
  color: white;
  width: 120px;
  border-radius: 6px;
  cursor: pointer;
  margin: 0 5px;
}

.select-in-table {
  background: #ff8c00;
  color: white;
  width: 120px;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.btn-delete {
  padding: 6px 12px;
  border: none;
  width: 120px;
  background: #dc3545;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  margin: 0 5px;
}

.btn-edit:hover,
.btn-delete:hover {
  opacity: 0.85;
}

h2 {
  font-family: "Poppins", sans-serif;
  font-size: 42px;
  font-weight: 800;
  color: #2c2c2c;
  margin-bottom: 10px;
  padding-left: 15px;
  border-left: 5px solid #4244e1;
}

.main-footer {
  flex-shrink: 0; /* Jangan biarkan footer mengecil */
  background: white;
  padding: 15px 0;
  text-align: center;
  width: 100%;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
}

.main-footer p {
  margin: 0;
  color: #757575;
  font-family: 'Poppins', sans-serif;
}

.igd-table-header th {
  background: #ff6f61;
}

.laboratorium-table-header th {
  background: #6a5acd;
}

.radiologi-table-header th {
  background: #20b2aa;
}

.rawat-inap-table-header th {
  background: #ff8c00;
}

.pulang-table-header th {
  background: #32cd32;
}
</style>
