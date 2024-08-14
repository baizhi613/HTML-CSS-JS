<script setup>
// import{reactive} from 'vue'
// const state=reactive({
//   count:100
// })
// const setCount=()=>{
//   state.count++
// }
import { ref } from 'vue'
const count = ref(0)
const setCount = () => {
  count.value++
}
</script>

<template>
  <div>
    <div>{{count }}</div>
    <button @click="setCount">+1</button>
  </div>
</template>