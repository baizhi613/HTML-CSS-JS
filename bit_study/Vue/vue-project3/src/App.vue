<script setup>
	import BitHeader from './components/BitHeader.vue';
	import BitMain from './components/BitMain.vue';
	import BitFooter from './components/BitFooter.vue';
</script>

<template>
	<bit-header></bit-header>
	<bit-main></bit-main>
	<bit-footer></bit-footer>
</template>

<style>
	#app{
		height: 100vh;
		padding: 15px 20px;
		font-size: 30px;
		color: #fff;
		text-align: center;
		background: skyblue;
	}
</style>
