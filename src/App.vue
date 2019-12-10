<template>
  <div id="app">
    <app-navbar />
    <div class="container">
    <router-view></router-view>

    </div>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar'
export default {
    name: 'app',
    components: {
      AppNavbar
    }
}
</script>

<style>

</style>
