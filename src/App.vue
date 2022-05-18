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
          <!-- {{stocksData.stocks}} -->
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

  <!-- <div class="container">
    <h2>Trade or View your Portfolio</h2>
    <p>You may Save & Load your Data</p>
    <p>Click on 'End Day' to begin a New Day!</p>
    <hr>
    <h5>Your Funds: $10,000</h5>
  </div> -->

  <!-- <HomeView msg="You did it!" /> -->
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

/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
