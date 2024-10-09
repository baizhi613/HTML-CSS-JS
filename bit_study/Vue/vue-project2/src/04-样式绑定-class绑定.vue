<script setup>
	import {ref} from 'vue'
	const isActive=ref(true)
</script>

<template>
	<p :class="isActive?'active':''">Activa1</p>
	<p :class="{active:isActive}">Active2</p>
	<p class="item":class="{active:isActive }">Active3</p>
</template>

<style scoped>
	.active{
		color: red;
	}
</style>
