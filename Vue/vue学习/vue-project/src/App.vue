<script setup>
import { ref,watch } from 'vue'
const count = ref(0)
const nickname = ref('张三')
const changeCount = () => {
  count.value++
}
const changeNickname = () => {
  nickname.value = '李四'
}
// watch(count, (newValue, oldValue) => {
//   console.log(newValue, oldValue)
// })
watch([count,nickname],(newArr,oldArr)=>{
  console.log(newArr,oldArr)
})
</script>

<template>
  <div>{{ count }}</div>
  <button @click="changeCount">改数字</button>
  <div>{{ nickname }}</div>
  <button @click="changeNickname">改名称</button>
</template>