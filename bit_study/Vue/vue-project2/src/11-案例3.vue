<script setup>
	import { computed, ref } from 'vue'
	// 计划列表
	const planList = ref([
		{ id: 12, name: '跑步', done: false },
		{ id: 76, name: '看书', done: false },
		{ id: 31, name: '撸码', done: false },
		{ id: 49, name: '追剧', done: false }
	])

	const isAll=computed({
		get(){
			return planList.value.every((item) => item.done)
		},
		set(val){
			planList.value.forEach((item) => (item.done = val))
		}
	})
	const onToggle = () => {
		planList.value.forEach((item) => (item.done = !item.done))
	}
</script>

<template>
	<p>
		<span>
			<input
				v-model="isAll"
				type="checkbox"
				id="all" />
			<label for="all">全选</label>
		</span>
		<button @click="onToggle">反选</button>
	</p>
	<ul>
		<li
			v-for="item in planList"
			:key="item.id">
			<input
				type="checkbox"
				v-model="item.done" />
			<span :class="{ completed: item.done }">{{ item.name }}</span>
		</li>
	</ul>
</template>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
	}
	ul {
		list-style: none;
	}
	#app {
		width: 400px;
		margin: 100px auto;
		padding: 15px 18px;
		background: plum;
		p {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 40px;
			border-bottom: 1px solid #ccc;
			button {
				padding: 3px 6px;
			}
			input {
				margin-right: 8px;
			}
		}
		ul {
			li {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 40px;
				border-bottom: 1px solid #ccc;
				span.completed {
					color: #ddd;
					text-decoration: line-through;
				}
			}
		}
	}
</style>
