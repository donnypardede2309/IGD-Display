<script setup>
import { watch } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

watch(
  () => route.path,
  (path) => {
    if (path.startsWith("/admin")) {
      document.body.className = "admin"
    } else if (path.startsWith("/view")) {
      document.body.className = "view"
    } else {
      document.body.className = "."
    }
  },
  { immediate: true }
)
</script>

<template>
  <router-view />
</template>