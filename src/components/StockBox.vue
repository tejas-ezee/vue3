<template>
  <div>
    <div v-for="stock of stocks" :key="stock">
      <div class="col-sm-6 col-md-4" v-if="(stock.hold > 0 || !port) && stock.isActive">
        <div class="panel" :class="port ? 'panel-info' : 'panel-success'">
          <div class="panel-heading">
            <h3 class="panel-title">{{ stock.name }}
              <small>(Price: {{ stock.price }}) </small>
              <small v-if="port">(Quantity: {{ stock.hold }})</small>
            </h3>
          </div>
          <div class="panel-body">
            <div class="pull-left">
              <input type="number" v-model="stock.quantity" placeholder="Quantity" class="form-control">
            </div>
            <div class="pull-right">
              <!-- <button :disabled="(stock.quantity === 0) || (stock.quantity <= stock.hold) ? true : false" class="btn btn-success" @click="buyStock(stock)">{{ port ? 'Sell' : 'Buy' }}</button> -->
              <button :disabled="(!port && stock.quantity <= 0) || (port && stock.quantity > stock.hold) || (port && stock.quantity <= 0) ? true : false" class="btn btn-success" @click="handleStock(stock, port)">{{ port ? 'Sell' : 'Buy' }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { stocksData, handleStock } from '../composable/stocks'

defineProps({
  port: {
    type: Boolean,
    default: false
  },
  stocks: {
    type: Object,
  }
})
</script>

<style scoped>
.panel-success {
  border-color: #d6e9c6;
  color: #3c763d;
}
.panel-info {
  border-color: #bce8f1;
  color: #31708f;
}
.panel-heading-info {
    color: #31708f;
    background-color: #d9edf7;
    border-color: #bce8f1;
}
.panel-heading-success {
    color: #3c763d;
    background-color: #dff0d8;
    border-color: #d6e9c6;
}
.panel-title {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 16px;
    color: inherit;
}
.panel-body {
    padding: 15px;
}
.pull-left {
    float: left!important;
}
.pull-right {
    float: right!important;
}
</style>
