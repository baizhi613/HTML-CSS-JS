<script setup>
	import {ref} from 'vue'
	const str=ref('<span style="color:red;">Hello Vue3+vite</span>')
</script>

<template>
	<div>
		<p v-html="str"></p>
		<p v-text="str"></p>
	</div>
</template>

<style scoped>

</style>