<script setup>
	import {ref} from 'vue'
	const nums=ref([11,22,33,44])

	const goodsList=ref([
		{id:1,name:'篮球',price:299},
		{id:2,name:'足球',price:99},
		{id:3,name:'排球',price:199}
	])

	const obj={
		id:10001,
		name:'bit',
		age:9
	}
</script>

<template>
	<div>
		<ul>
			<li v-for="(item,index) in nums">
				{{ item }}=>{{ index }}
			</li>
		</ul>
		<div>
			<div class="goods-item" v-for="item in goodsList">
				<p>id={{ item.id }}</p>
				<p>id={{ item.name }}</p>
				<p>id={{ item.price }}</p>
			</div>
			<ul>
				<li v-for="(value,key,index) in obj">
					{{ value }}=>{{ key }}=>{{ index }}
				</li>
			</ul>
			<ul>
				<li v-for="(item,index) in 5">
					{{ item }}=>{{ index }}
				</li>
			</ul>
		</div>
	</div>
</template>

<style>

</style>