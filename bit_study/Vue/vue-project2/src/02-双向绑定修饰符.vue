<script setup>
	import { reactive } from "vue"
	const goods=reactive({
		name:'',
		price:''
	})
</script>

<template>
	<div>
		名称:<input type="text" v-model.lazy="goods.name"><br><br>
		价格:<input type="text" v-model.trim.number="goods.price"><br><br>
	</div>
</template>

<style scoped>

</style>
