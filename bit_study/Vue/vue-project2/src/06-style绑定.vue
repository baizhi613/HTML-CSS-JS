<script setup>
	import {ref,reactive} from 'vue'
	const colorStr=ref('red')
	const styleObj=reactive({
		color:'green',
		background:'yellow'
	})
</script>

<template>
	<div>
		<p :style="{color:colorStr}">Style1</p>
		<p :style="styleObj">Style2</p>
	</div>
</template>

<style>

</style>
