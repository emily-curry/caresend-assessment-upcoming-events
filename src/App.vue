<template>
  <div class="app">
    <NavBar />
    <div class="layout">
      <div class="content">
        <EventsPage />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import NavBar from "@/components/NavBar.vue";
import EventsPage from "@/pages/EventsPage.vue";
</script>

<style lang="scss" scoped>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-top: 78px;
}

.layout {
  display: flex;
  justify-content: center;
}

.content {
  width: 1000px;
  padding: 1rem;
}
</style>

<style lang="scss">
html,
body {
  overflow-x: visible !important;
  overflow-y: visible !important;
}
</style>
