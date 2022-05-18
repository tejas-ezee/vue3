<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import HomeView from '@/views/HomeView.vue'
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
  <header>
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
  </header>
</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>
