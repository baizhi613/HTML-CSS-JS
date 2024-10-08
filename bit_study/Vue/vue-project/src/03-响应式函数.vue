<script setup>
	import { ref, reactive } from 'vue'
	const msg = ref('Hello World');
	const obj=reactive({
		name:'小Vue',
		age:9
	})
</script>

<template>
	<h1>{{ msg }}</h1>
	<p>我叫{{obj.name}},今年{{obj.age}}岁了</p>
</template>

<style scoped></style>
