<script setup>
	import {ref} from 'vue'
	const x=ref(0)
</script>

<template>
	<div class="progress">
		<div class="inner" :style="{width:(x/4)*100+'%'}">
			<span>{{(x / 4) * 100 + '%' }}</span>
		</div>
	</div>
	<button @click="x = 1">设置25%</button>
	<button @click="x = 2">设置50%</button>
	<button @click="x = 3">设置75%</button>
	<button @click="x = 4">设置100%</button>
</template>

<style>
	.progress {
		height: 25px;
		width: 400px;
		border-radius: 15px;
		background-color: #272425;
		border: 3px solid #272425;
		box-sizing: border-box;
		margin-bottom: 30px;
	}
	.inner {
		height: 20px;
		border-radius: 10px;
		text-align: right;
		position: relative;
		background-color: #409eff;
		background-size: 20px 20px;
		box-sizing: border-box;
		transition: all 1s;
	}
	.inner span {
		position: absolute;
		right: -25px;
		bottom: -25px;
	}
</style>
