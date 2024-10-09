<script setup>
	import { reactive, ref, watch } from 'vue'
	const keyword = ref('')
	const obj = reactive({
		username: '',
		password: ''
	})
	watch(keyword, (newVal, oldVal) => {
		console.log(newVal, oldVal)
	})
	watch(obj, (newVal, oldVal) => {
		console.log(newVal, oldVal)
		console.log(newVal === oldVal)
		console.log(newVal === obj)
	})
</script>

<template>
	<div>
		<input
			type="text"
			v-model="keyword"
			placeholder="请输入关键字" />
		<br />
		<br />
		<input
			type="text"
			v-model="obj.username"
			placeholder="请输入用户名" />
		<br />
		<br />
		<input
			type="text"
			v-model="obj.password"
			placeholder="请输入密码" />
	</div>
</template>

<style>
	
</style>
