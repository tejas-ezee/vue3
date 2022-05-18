<template>
  <div id="app">
    <div class="navbar navbar-default navbar-fixed-top hidden-sm hidden-xs">
      <div class="container">
        <!-- <a href="#" class="navbar-brand">Stock Trader</a> -->
        <RouterLink to="/" class="navbar-brand">Stock Trader</RouterLink>
        <strong class="navbar-text navbar-right">Funds: $10,000</strong>
        <ul class="nav navbar-nav pull-right">
          <li><a href="">End Day</a></li>
          <li><a href="#">Save and Load</a></li>
        </ul>
        <ul class="nav navbar-nav">
          <!-- <li><a href="#">Portfolio</a></li>
          <li><a href="#">Stocks</a></li> -->
          <li><RouterLink to="/portfolio">Portfolio</RouterLink></li>
          <li><RouterLink to="/stocks">Stocks</RouterLink></li>
        </ul>
      </div>
    </div>

    <div class="container">
      <h2>Trade or View your Portfolio</h2>
      <p>You may Save & Load your Data</p>
      <p>Click on 'End Day' to begin a New Day!</p>
      <hr>
      <h5>Your Funds: $9,670</h5>
      {{ msg }}
    </div>

    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import StocksBox from './StockBox.vue'
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

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
