<script setup>
	const onKeyDown=()=>{
		console.log('onKeyDown');
	}
	const onPClick=()=>{
		console.log('onPClick');
	}
	const onDivClick=()=>{
		console.log('onDivClick');
	}
</script>

<template>
	<div>
		<input type="text" @keydown.enter="onKeyDown">
	</div>

	<div @click="onDivClick">
		<a href="http://baidu.com" @click.prevent>百度一下</a>
		<p @click.stop="onPClick"></p>
	</div>
</template>

<style scoped>
	.div{
		background: purple;
	}
	.p{
		background: pink;
	}
</style>
