<script setup>
	import {ref} from 'vue'
	const visible=ref(false)
</script>

<template>
	<h3>可折叠面板</h3>
	<div class="panel">
		<div class="title">
			<h4>自由与爱情</h4>
			<span class="btn" @click="visible=!visible">{{visible?'收起':'展开'}}</span>
		</div>
			<div class="container" v-show="visible">
				<p>生命诚可贵,</p>
				<p>爱情价更高。</p>
				<p>若为自由故,</p>
				<p>二者皆可抛。</p>
			</div>
	</div>
</template>

<style lang="scss">
	body{
		background: #ddd;
	}
	#app{
		width: 400px;
		margin: 20px auto;
		padding: 1em 2em 2em;
		border: 4px solid green;
		box-shadow: 3px 3px 3px rgb(0,0,0,0.5);
		background: #fff;
		border-radius: 1em;
		h3{
			text-align: center;
		}
	}

	.panel{
		.title{
			display: flex;
			justify-content: space-between;
			align-items: center;
			border: 1px solid #ccc;
			padding: 0 1em;
			h4{
				margin: 0;
				line-height: 2;
			}
			.btn{
				cursor: pointer;
			}
		}
		.container{
			border: 1px solid #ccc;
			padding: 0 1em;
			border-top-color: transparent;
		}
	}
</style>