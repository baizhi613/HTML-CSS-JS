<!-- <script>
export default{
  setup() {
    console.log('setup')
    const message='this is message'
    const logMessage=()=>{
      console.log(message)
    }
    return{
      message,
      logMessage
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
}
</script> -->

<script setup>
const message='this is message'
const logMessage=()=>{
  console.log(message)
}
</script>

<template>
  <div>
    {{ message }}
    <button @click="logMessage">log</button>
  </div>
</template>