<script setup>
	import { computed, ref } from 'vue'
	const goodsList = ref([
		{ id: 1, name: '篮球', num: 1 },
		{ id: 2, name: '玩具', num: 3 },
		{ id: 3, name: '书籍', num: 2 }
	])
	const totalNum=computed(()=>{
		return goodsList.value.reduce((prev,item)=>prev+item.num,0)
	})
	console.log(totalNum.value)
</script>

<template>
	<h3>比特人的礼物清单</h3>
	<table>
		<thead>
			<tr>
				<th>名字</th>
				<th>数量</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="item in goodsList"::key="item.id">
				<td>{{ item.name }}</td>
				<td>{{ item.num }}</td>
			</tr>
		</tbody>
	</table>
	<p>礼物总数：{{totalNum}}个</p>
	<p>礼物总数：<span v-text="totalNum"></span>个</p>
</template>

<style>
	table {
		width: 350px;
		border: 1px solid #333;
	}
	table th,
	table td {
		border: 1px solid #333;
	}
	table td {
		text-align: center;
	}
</style>
