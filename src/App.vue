<template>
  <div class="App">
    <NavBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import NavBar from '@/components/NavBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBar,
  },
});
</script>

<style lang="sass" scoped>
.App
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
</style>
