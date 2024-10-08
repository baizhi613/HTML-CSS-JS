<script setup>
	import {ref} from 'vue'
	const visible=ref(true)
	const isLogin=ref(true)
	const mark=ref(100)
</script>

<template>
	<div>
		<div class="red" v-show="visible"></div>
		<div class="green" v-if="visible"></div>
		<hr/>
		<div v-if="isLogin">xxx,欢迎回来</div>
		<div v-else>你好,请登录</div>
		<hr/>
		<div v-if="mark>=90">优秀</div>
		<div v-else-if="mark>=70">良好</div>
		<div v-else>差</div>
	</div>
</template>

<style scoped>
	.red,
	.green{
		width: 200px;
		height: 200px;
	}
	.red{
		background: red;
	}
	.green{
		background: green;
	}
</style>