<script setup>
	import { ref } from 'vue'
	const imgList=[
		'https://cxk-1305128831.cos.ap-beijing.myqcloud.com/11-00.gif',
		'https://cxk-1305128831.cos.ap-beijing.myqcloud.com/11-01.gif',
		'https://cxk-1305128831.cos.ap-beijing.myqcloud.com/11-02.gif',
		'https://cxk-1305128831.cos.ap-beijing.myqcloud.com/11-03.gif',
		'https://cxk-1305128831.cos.ap-beijing.myqcloud.com/11-04.png',
		'https://cxk-1305128831.cos.ap-beijing.myqcloud.com/11-05.png'
	]

	const index=ref(0)
</script>

<template>
	<div>
		<button @click="index--" v-if="index>=1">上一页</button>
	</div>
	<img :src="imgList[index]" alt="img">
	<div>
		<button @click="index++" v-if="index<imgList.length-1">下一页</button>
	</div>
</template>

<style>
	#app{
		display: flex;
		width: 500px;
		height: 240px;
	}

	img{
		width: 240px;
		height: 240px;
	}
	#app div{
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>