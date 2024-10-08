<script setup>
	import {ref} from 'vue'
	import './styles/index.css'
	const todoList = ref([
		{ id: 321, name: '吃饭', finished: false },
		{ id: 666, name: '睡觉', finished: true },
		{ id: 195, name: '打豆豆', finished: false }
	])

	const title=ref('')

	const onAdd=()=>{
		const name=title.value.trim()
		if(!name){
			return alert('名称不能为空')
		}
		todoList.value.push({
			name,
			id:Date.now(),
			finished:false
		})
		title.value=''
	}

	const onDel = (i) => {
		if (confirm('确认删除么')) {
			todoList.value.splice(i, 1)
		}
	}

	const onClear = () => {
		todoList.value = []
	}
</script>

<template>
	<section clsss="todoapp">
		<header class="header">
			<h1>比特人记事本</h1>
			<input
				placeholder="请输入任务"
				class="new-todo"
				v-model="title" />
			<button
				class="add"
				@click="onAdd">
				添加任务
			</button>
		</header>
		<section class="main">
			<ul class="todo-list">
				<li
					class="todo"
					v-for="(item, index) in todoList"
					:key="item.id">
					<div class="view">
						<span class="index">{{ index + 1 }}.</span>
						<label>{{ item.name }}</label>
						<button
							class="destroy"
							@click="onDel(index)"></button>
					</div>
				</li>
			</ul>
		</section>
		<footer class="footer">
			<span class="todo-count"
				>合 计: <strong> {{ todoList.length }} </strong></span
			>
			<button
				class="clear-completed"
				@click="onClear">
				清空任务
			</button>
		</footer>
	</section>
</template>

<style>

</style>