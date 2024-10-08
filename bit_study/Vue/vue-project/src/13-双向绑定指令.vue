<script setup>
	import {reactive} from 'vue'
	const loginForm=reactive({
		username:'',
		password:''
	})
</script>

<template>
	账号:<input type="text" v-model="loginForm.username"><br><br>
	密码:<input type="text" v-model="loginForm.password"><br><br>
	<button>登录</button>
	<button>重置</button>
</template>

<style>

</style>