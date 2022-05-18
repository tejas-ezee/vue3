<template>
  <div style="margin-top: 50px;">
    <StocksBox :stocks="stocksData.stocks" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import StocksBox from './StockBox.vue'
import { stocksData } from '../composable/stocks.js'
</script>

<style scoped>
</style>
