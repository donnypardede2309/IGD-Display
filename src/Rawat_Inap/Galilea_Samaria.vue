<template>
  <div class="main-content">
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

    <div class="table-container">
      <section>
        <h2>Data Pasien Galsam</h2>
        <table class="custom-table">
          <thead class="yudea-table-header">
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
            <tr v-for="(p, index) in daftarPasien" :key="index">
              <td>{{ p.nama }}</td>
              <td>{{ p.alamat }}</td>
              <td>{{ p.jenis }}</td>
              <td>{{ p.tanggalMasuk }}</td>
              <td>{{ p.jamMasuk }}</td>
              <td>{{ p.status }}</td>
              <td>{{ p.ruangan || "Ruang Galsam" }}</td>
              <td>{{ p.nomorTempatTidur }}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>

    <footer class="main-footer">
      <p>&copy; Created by Donny Pardede | RS HKBP Balige</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import { supabase } from "@/lib/supabase";

/* ================= STATE ================= */
const daftarPasien = ref([]);
const scrollContainer = ref(null);
let channel = null;
let scrollInterval = null;

/* ================= FETCH DATA ================= */
async function ambilData() {
  const { data, error } = await supabase
    .from("antrian")
    .select("*")
    .eq("ruangan", "Ruang Galsam")
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
      ruangan: p.ruangan,
    }));
  }
}

/* ================= AUTO SCROLL LOGIC ================= */
function startAutoScroll() {
  clearInterval(scrollInterval);

  scrollInterval = setInterval(() => {
    let el = scrollContainer.value;
    // Jika ref dalam v-if/v-for kadang berupa array
    if (Array.isArray(el)) el = el[0];

    if (!el) return;

    const maxScroll = el.scrollHeight - el.clientHeight;

    if (maxScroll <= 0) return;

    // Jika sudah mentok bawah
    if (el.scrollTop >= maxScroll - 1) {
      clearInterval(scrollInterval);
      setTimeout(() => {
        if (el) {
          el.scrollTo({ top: 0, behavior: "smooth" });
          setTimeout(() => {
            startAutoScroll(); // Mulai lagi setelah 4 detik di atas
          }, 4000);
        }
      }, 1000);
      return;
    }

    el.scrollTop += 0.6; // Kecepatan scroll
  }, 16);
}

/* ================= LIFECYCLE ================= */
onMounted(async () => {
  await ambilData();
  startAutoScroll();
  document.body.style.overflow = "hidden"; // Matikan scroll layar utama

  channel = supabase
    .channel("antrian-channel-yudea")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "antrian" },
      () => ambilData(),
    )
    .subscribe();
});

onUnmounted(() => {
  if (channel) supabase.removeChannel(channel);
  if (scrollInterval) clearInterval(scrollInterval);
  document.body.style.overflow = "auto";
});
</script>

<style scoped>
/* Reset & Base */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background-color: #e2e2e3;
  font-family: "Poppins-Regular", Helvetica;
}

/* Header & Shapes (Sesuai kode terbaru Anda) */
.header-content {
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
.rectangle_main {
  background-color: #4244e1f0;
  width: 100%;
  border-radius: 0 0 20px 20px;
  height: 256px;
  margin: 0 20px;
  box-shadow: 0px 4px 4px #00000040;
  position: relative;
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
  right: 0;
  z-index: 2;
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
.text-wrapper,
.text-wrapper-2 {
  position: absolute;
  color: white;
  z-index: 3;
  text-align: right;
  right: 40px;
}
.text-wrapper {
  top: 10px;
}
.text-wrapper-2 {
  position: absolute;
  top: 50%;           
  transform: translateY(-50%); 
  right: 40px;
  color: white;
  text-align: right;
  z-index: 3;
}

/* KUNCI STICKY & SCROLL INTERNAL */
.table-container {
  margin: 20px auto;
  width: 97%;
  height: calc(100vh - 350px); /* Batasi tinggi agar scroll internal muncul */
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.table-container section {
  display: flex;
  flex-direction: column;
  height: 100%;
}

h2 {
  font-family: "Poppins", sans-serif;
  position: sticky;
  top: 0;
  z-index: 20;
  background: #e2e2e3; /* Samakan dengan warna background body */
  padding: 10px 15px;
  margin: 0;
  margin-bottom: 20px;
  border-left: 5px solid #4244e1;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.custom-table thead {
  position: sticky;
  top: 0;
  z-index: 15;
  display: table;
  width: 100%;
  table-layout: fixed;
}

.yudea-table-header th {
  background: rgb(106, 26, 253);
  color: white;
  padding: 16px;
  text-align: left;
}

/* Bagian yang bergerak */
.custom-table tbody {
  display: block;
  flex: 1;
  overflow-y: hidden; /* JavaScript yang akan kontrol ini */
  width: 100%;
}

.custom-table tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}

.custom-table td {
  padding: 14px;
  border-bottom: 1px solid #eee;
}

.main-footer {
  background: white;
  padding: 15px 0;
  text-align: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}
</style>
