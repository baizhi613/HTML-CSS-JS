<script setup>
	import { ref } from 'vue'
	const intro=ref('')
	const city=ref('SH')
	const blood=ref('ab')
	const isAgree=ref(false)
	const hobby=ref([])
</script>

<template>
	<div>
		<textarea v-model="intro" cols="30" rows="4" placeholder="请输入自我介绍"></textarea>
		<br>
		<br>
		<select v-model="city">
			<option value="BJ">北京</option>
			<option value="SH">上海</option>
			<option value="SZ">深圳</option>
			<option value="HZ">杭州</option>
		</select>
		<br>
		<br>
		<input v-model="blood" type="radio" value="a">A
		<input v-model="blood" type="radio" value="b">B
		<input v-model="blood" type="radio" value="ab">AB
		<input v-model="blood" type="radio" value="o">O
		<br>
		<br>
		<input type="checkbox" v-model="isAgree">是否同意用户协议
		<br>
		<br>
		<input v-model="hobby" type="checkbox" value="LQ">篮球 <input v-model="hobby" type="checkbox" value="ZQ">足球
		<input v-model="hobby" type="checkbox" value="YMQ">羽毛球 <input v-model="hobby" type="checkbox" value="PPQ">乒乓球
		<br>
		<input v-model="hobby" type="checkbox" value="PB">跑步 <input v-model="hobby" type="checkbox" value="YX">游戏
		<input v-model="hobby" type="checkbox" value="PLT">普拉提 <input v-model="hobby" type="checkbox" value="LDW">拉丁舞
	</div>
</template>

<style scoped>

</style>
