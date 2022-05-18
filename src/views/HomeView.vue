<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import TheWelcome from '@/components/TheWelcome.vue'
import { stocksData, dollarUS } from '../composable/stocks.js'
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <div id="app">
      <div class="container">
        <h2>Trade or View your Portfolio</h2>
        <p>You may Save & Load your Data</p>
        <p>Click on 'End Day' to begin a New Day!</p>
        <hr>
        <h5>Your Funds: {{ dollarUS.format(stocksData.funds) }}</h5>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css';
body {
  position: relative;
  padding-top: 50px;
}
.responsive-nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  background: #f8f8f8;
  transition: margin 0.2s ease-out;
  border: 1px solid #cccccc;
}
.responsive-nav.collapsed {
  margin-left: -250px;
}
.hamburger {
  display: block;
  height: 30px;
  width: 30px;
  padding: 15px;
  text-align: center;
  position: relative;
  left: 30px;
}
</style>
