<script setup>
	import {ref} from 'vue'
	const msg=ref('Hello Vue3+vite')
	const url=ref('http:/www.baidu.com')
	const img=ref('https://image.meiye.art/pic_afonTgKOO5h3R1lblU4bl?imageMogr2/thumbnail/560x/interlace/1')
</script>

<template>
	<div v-bind:title="msg">
		{{ msg }}
	</div>

	<div :title="msg"><!--简写-->
		{{ msg }}
	</div>

	<a :href="url">百度一下</a>

	<img :src="img" alt="" width="60px" height="60px">
</template>

<style scoped>

</style>