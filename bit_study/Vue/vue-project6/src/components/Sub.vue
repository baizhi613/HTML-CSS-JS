<template>
<div class="sub">
    <h3>sub组件</h3>
    <p>已知库存数:{{ stockStore.stock }}</p>
    <button @click="stockStore.subStock()">库存-1</button>
</div>
</template>

<script setup>
   import { useStockStore } from '@/stores/counter'; 
   const stockStore=useStockStore()    
</script>

<style scoped>

</style>