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
          <a class="nav-item" :class="{ active: activeSection === 'igd' }" @click="setSection('igd')">Pasien IGD</a>
          <a class="nav-item" :class="{ active: activeSection === 'laboratorium' }" @click="setSection('laboratorium')">Laboratorium</a>
          <a class="nav-item" :class="{ active: activeSection === 'radiologi' }" @click="setSection('radiologi')">Radiologi</a>
          <a class="nav-item" :class="{ active: activeSection === 'rawat-inap' }" @click="setSection('rawat-inap')">Rawat Inap</a>
          <a class="nav-item" :class="{ active: activeSection === 'pulang' }" @click="setSection('pulang')">Pasien Pulang</a>
        </div>
      </nav>
    </div>

    <!-- ================= TABLE CONTAINER ================= -->
    <div class="table-container">

      <transition name="fade-slide" mode="out-in">
        <div :key="activeSection">

          <!-- ================= IGD ================= -->
          <section v-if="activeSection === 'igd'">
            <h2>Data Pasien IGD</h2>
            <table class="custom-table">
              <thead class="igd-table-header">
                <tr>
                  <th>Nama</th>
                  <th>Jenis</th>
                  <th>Tanggal</th>
                  <th>Jam</th>
                  <th>Status</th>
                  <th>Ruangan</th>
                  <th>No TT</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="p in daftarPasien"
                  :key="p.id"
                  :class="{ highlighted: highlightedIds.includes(p.id) }"
                >
                  <td>{{ p.nama }}</td>
                  <td>{{ p.jenis }}</td>
                  <td>{{ p.tanggalMasuk }}</td>
                  <td>{{ p.jamMasuk }}</td>
                  <td>{{ p.status }}</td>
                  <td>{{ p.ruangan || 'IGD' }}</td>
                  <td>{{ p.nomorTempatTidur }}</td>
                </tr>
              </tbody>
            </table>
          </section>

          <!-- ================= LAB ================= -->
          <section v-else-if="activeSection === 'laboratorium'">
            <h2>Data Pasien Laboratorium</h2>
            <table class="custom-table">
              <thead class="laboratorium-table-header">
                <tr>
                  <th>Nama</th>
                  <th>Jenis</th>
                  <th>Tanggal</th>
                  <th>Jam</th>
                  <th>Status</th>
                  <th>Ruangan</th>
                  <th>No TT</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="p in pasienLabor" :key="p.id">
                  <td>{{ p.nama }}</td>
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

          <!-- ================= RADIOLOGI ================= -->
          <section v-else-if="activeSection === 'radiologi'">
            <h2>Data Pasien Radiologi</h2>
            <table class="custom-table">
              <thead class="radiologi-table-header">
                <tr>
                  <th>Nama</th>
                  <th>Jenis</th>
                  <th>Tanggal</th>
                  <th>Jam</th>
                  <th>Status</th>
                  <th>Ruangan</th>
                  <th>No TT</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="p in pasienRadiologi" :key="p.id">
                  <td>{{ p.nama }}</td>
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

          <!-- ================= RAWAT INAP ================= -->
          <section v-else-if="activeSection === 'rawat-inap'">
            <h2>Data Pasien Rawat Inap</h2>
            <table class="custom-table">
              <thead class="rawat-inap-table-header">
                <tr>
                  <th>Nama</th>
                  <th>Jenis</th>
                  <th>Tanggal</th>
                  <th>Jam</th>
                  <th>Status</th>
                  <th>Ruangan</th>
                  <th>No TT</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="p in pasienRawatInap" :key="p.id">
                  <td>{{ p.nama }}</td>
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

          <!-- ================= PULANG ================= -->
          <section v-else-if="activeSection === 'pulang'">
            <h2>Data Pasien Pulang</h2>
            <table class="custom-table">
              <thead class="pulang-table-header">
                <tr>
                  <th>Nama</th>
                  <th>Jenis</th>
                  <th>Tanggal</th>
                  <th>Jam</th>
                  <th>Status</th>
                  <th>Ruangan</th>
                  <th>No TT</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="p in pasienPulang" :key="p.id">
                  <td>{{ p.nama }}</td>
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

        </div>
      </transition>

    </div>

    <p style="text-align: center; margin: 40px 0; font-family: 'Poppins', sans-serif; color: #757575;">
      &copy; Created by Donny Pardede.</p>
      
  </div>
</template>


<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { supabase } from '@/lib/supabase'

/* ================= STATE ================= */

const activeSection = ref("igd")
const daftarPasien = ref([])
const highlightedIds = ref([])

const sections = ['igd', 'laboratorium', 'radiologi', 'rawat-inap', 'pulang']

/* =====================================================
   DATA RUANGAN
===================================================== */

const daftarRuangan = [
  "Ruang Yudea",
  "Ruang Sarfat",
  "Ruang Galilea",
  "Ruang Samaria",
  "Ruang Siloam",
  "Ruang Efrata (Isolasi)"
]


let channel = null
let rotateInterval = null

/* ================= FUNCTIONS ================= */

const setSection = (section) => {
  activeSection.value = section
}

async function ambilData() {
  const { data, error } = await supabase
    .from('antrian')
    .select('*')
    .order('created_at', { ascending: true })

  if (!error && data) {
    daftarPasien.value = data.map(p => ({
      id: p.id,
      nama: p.nama,
      jenis: p.jenis,
      tanggalMasuk: p.tanggal,
      jamMasuk: p.jam,
      nomorTempatTidur: p.no_TT,
      status: p.status,
      layanan: p.layanan,
      ruangan: p.ruangan
    }))
  }
}

/* ================= FILTERED DATA ================= */

const pasienLabor = computed(() =>
  daftarPasien.value.filter(p => p.layanan === "laboratorium")
)

const pasienRadiologi = computed(() =>
  daftarPasien.value.filter(p => p.layanan === "radiologi")
)

const pasienRawatInap = computed(() =>
  daftarPasien.value.filter(p => p.layanan === "rawat-inap" && p.ruangan)
)

const pasienPulang = computed(() =>
  daftarPasien.value.filter(p => p.layanan === "pulang")
)

// Update status based on layanan
watch(daftarPasien, (val) => {
  val.forEach(p => {
    switch (p.layanan) {
      case "laboratorium":
        p.status = "Proses Laboratorium"
        break
      case "radiologi":
        p.status = "Proses Radiologi"
        break
      case "rawat-inap":
        p.status = p.ruangan ? "Sedang Dirawat" : "Menunggu Ruangan"
        break
      case "pulang":
        p.status = "Sudah Pulang"
        break
      default:
        p.status = "Aktif"
    }
  })
}, { deep: true })

/* ================= AUTO ROTATE ================= */

function startAutoRotate() {
  let index = 0
  rotateInterval = setInterval(() => {
    index = (index + 1) % sections.length
    activeSection.value = sections[index]
  }, 10000)
}

/* ================= FULLSCREEN ================= */

function enterFullScreen() {
  const elem = document.documentElement
  if (elem.requestFullscreen) {
    elem.requestFullscreen().catch(() => { })
  }
}

/* ================= LIFECYCLE ================= */

onMounted(async () => {

  await ambilData()
  startAutoRotate()
  enterFullScreen()

  channel = supabase
    .channel('antrian-channel')

    // INSERT → highlight 5 detik
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'antrian'
      },
      (payload) => {

        highlightedIds.value.push(payload.new.id)

        setTimeout(() => {
          highlightedIds.value =
            highlightedIds.value.filter(id => id !== payload.new.id)
        }, 5000)

        ambilData()
      }
    )

    // UPDATE & DELETE → refresh saja
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'antrian'
      },
      () => ambilData()
    )

    .subscribe()
})

onUnmounted(() => {
  if (channel) supabase.removeChannel(channel)
  if (rotateInterval) clearInterval(rotateInterval)
})
</script>


<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #e2e2e3;
}

tbody td {
  font-family: 'Poppins', sans-serif;
  color: #555;
  font-weight: 500;
}

.section {
  margin: 40px;
}

.hidden {
  display: none;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(40px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}


.action-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 120px;
}

.highlight {
  background-color: #00ff88 !important;
  color: black !important;
  transition: background-color 0.3s ease;
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
  background-color: #4244e1f0;
  width: 100%;
  border-radius: 0 0 20px 20px;
  height: 256px;
  margin: 0 20px;
  box-shadow: 0px 4px 4px #00000040;
}

.rectangle_one {
  background-color: #4245E2c7;
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
  font-family: 'Poppins', sans-serif;
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
  margin-top: 40px;
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
  transition: 0.3s ease;
}

.nav-item:hover::after {
  width: 100%;
}

/* Active menu */
.nav-item.active::after {
  width: 100%;
}

.table-container {
  width: 85%;
  margin: 40px auto;
  overflow-x: auto;
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Lora', serif;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
}

/* Header */
.custom-table thead {
  background: linear-gradient(135deg, #2c3e94, #3b4cca);
  color: white;
}

.custom-table th {
  padding: 14px;
  text-align: left;
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* Body */
.custom-table td {
  padding: 14px;
  border-bottom: 1px solid #eee;
  font-weight: 600;
}

th {
  font-family: "Poppins-Regular", Helvetica;
}

/* Hover row */
.custom-table tbody tr:hover {
  background: #f5f7ff;
  transition: 0.2s;
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
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: #2c2c2c;
  margin-bottom: 25px;
  padding-left: 15px;
  border-left: 5px solid #4244e1;
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

.pasien-pulang-table-header th {
  background: #32cd32;
}
</style>
