<script setup>
	import {ref} from 'vue'
	const count=ref(0)

	const increase=()=>{
		count.value++;
	}

	const add=(n)=>{
		count.value+=n;
	}
</script>

<template>
	<div>
		<p>{{ count }}</p>
		<button v-on:click="count++">+1</button>
		<button v-on:click="increase">+1</button>
		<button v-on:click="add(3)">+3</button>
		<button v-on:click="add(5)">+5</button>
	</div>
</template>

<style scoped>

</style>