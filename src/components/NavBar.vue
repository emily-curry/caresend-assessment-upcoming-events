<template>
  <b-navbar class="navbar" type="is-light">
    <template slot="brand">
      <b-navbar-item>
        <img :src="require('@/assets/logos/CareSend Horizontal@2x.png')" alt="CareSend wordmark" />
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<style lang="scss" scoped>
.navbar {
  height: 78px;
  width: 100%;
  max-width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  border-bottom: 1px solid #e8e9ea;
  padding: 20px 15px 5px;
}
</style>
