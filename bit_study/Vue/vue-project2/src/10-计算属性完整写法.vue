<script setup>
	import { computed } from 'vue'
	// const uname=computed(()=>{
	// 	return 'hello'
	// })

	const uname=computed({
		get(){
			return 'hello'
		},
		set(val){
			console.log(val)
		}
	})
</script>

<template>
	<input type="text" v-model="uname">
</template>

<style>

</style>
