<!-- <script>
export default{
  setup() {
    const message='hello Vue3'
    const logMessage=()=>{
      console.log(message)
    }
    return{
      message,
      logMessage
    }
  },
  beforeCreate(){
    console.log('beforeCreate函数')
  }
}
</script> -->

<script setup>
const message='this is a message'
const logMessage=()=>{
  console.log(message)
}
</script>
<template>
  <div>{{message}}</div>
  <button @click="logMessage">按钮</button>
</template>
