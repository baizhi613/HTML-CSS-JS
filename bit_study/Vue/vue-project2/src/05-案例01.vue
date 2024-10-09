<script setup>
	import { ref } from 'vue'
	// 1. 静态布局+样式
	// 2. 列表渲染

	// tabs 栏数组
	const tabs = [
		{ id: 1, name: '京东秒杀' },
		{ id: 2, name: '每日特价' },
		{ id: 3, name: '品类秒杀' }
	]
	// 3. 点谁谁亮

	// 激活的下标，默认第一个高亮，初始值是 0
	const activeIndex = ref(0)
</script>

<template>
	<ul>
		<li v-for="item,index in tabs":key="item.id">
			<a @click="activeIndex=index" href="#" :class="{active:activeIndex===index}">{{item.name}}</a>
		</li>
	</ul>
</template>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	ul {
		display: flex;
		list-style: none;
		border-bottom: 2px solid #e01222;
		padding: 0 10px;
	}

	ul li {
		width: 100px;
		height: 50px;
		line-height: 50px;
		text-align: center;
	}
	ul li a {
		display: block;
		text-decoration: none;
		color: #333;
		font-weight: bold;
	}
	ul li a.active {
		background: #e01222;
		color: #fff;
	}
</style>
