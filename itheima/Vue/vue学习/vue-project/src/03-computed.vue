<script setup>
import { computed, ref } from 'vue'
const list = ref([1, 2, 3, 4, 5, 6, 7, 8])
const computedList = computed(() => {
  return list.value.filter(item => item > 2)
})
const addFn = () => {
  list.value.push(666)
}
</script>

<template>
  <div>
    <div>原始数据：{{ list }}</div>
    <div>计算后的数据：{{ computedList }}</div>
    <button @click="addFn" type="button">修改</button>
  </div>
</template>