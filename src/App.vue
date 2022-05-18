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
  <div class="navbar navbar-default navbar-fixed-top hidden-sm hidden-xs">
    <div class="container">
      <RouterLink to="/" class="navbar-brand">Stock Trader</RouterLink>
      <strong class="navbar-text navbar-right">Funds: {{ dollarUS.format(stocksData.funds) }}</strong>
      <!-- <ul class="nav navbar-nav pull-right">
        <li><a href="">End Day</a></li>
        <li><a href="#">Save and Load</a></li>
      </ul> -->
      <ul class="nav navbar-nav">
        <li><RouterLink to="/portfolio">Portfolio</RouterLink></li>
        <li><RouterLink to="/stocks">Stocks</RouterLink></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li v-for="list of stocksData.stocks" :key="list">
              <label>
                <input type="checkbox" v-model="list.isActive" class="category-cb">
                <span>{{ list.name }}</span>
              </label>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import HomeView from '@/views/HomeView.vue'
import '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'
import '//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js'
import { stocksData, dollarUS } from './composable/stocks'
</script>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}
</style>
