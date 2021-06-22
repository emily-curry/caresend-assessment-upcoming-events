<template>
  <b-navbar
    class="NavBar"
    type="is-light"
  >
    <template slot="brand">
      <b-navbar-item>
        <img :src="require('@/assets/logos/CareSend Horizontal@2x.png')">
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'NavBar',
});
</script>

<style lang="sass" scoped>
.NavBar
  background-color: white
  border-bottom: 1px solid #E8E9EA
  padding: 20px 15px 5px
</style>
