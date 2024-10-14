<template>
  <div>
    库存总数：<input type="number" v-model.number="stockStore.stock">
    <p>stock的翻倍值={{ stockStore.doubleStock }}</p>
    <hr />
    <Add />
    <hr />
    <Sub />
  </div>
</template>

<script setup>
import Add from './components/Add.vue';
import Sub from './components/Sub.vue';
import { useStockStore } from './stores/counter';
const stockStore=useStockStore()
</script>

<style>
#app {
  width: 350px;
  margin: 100px auto;
  padding: 5px 5px;
  border: 1px solid #ccc;
}
</style>