<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Templeton from './components/Templeton.vue'
import Navbar from './components/Navbar.vue'
import Cards from './components/Cards.vue'
import Jumbotron from './components/Jumbotron.vue'
</script>

<template>
  <Navbar/>
  <Jumbotron/>
 
  <Templeton/>
  <Cards/>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
