<script>
	export default{
		data(){
			return{
				count:0
			}
		},
		methods:{
			fn(){
				console.log('fn函数执行了')
			}
		},
		setup(){
			console.log('0-setup')
		},
		beforeCreate(){
			console.log('1-beforeCreate')
			console.log(this.count)
			console.log(this.fn)
		},
		created(){
			console.log('2-created')
			console.log(this.count)
			// console.log(this.fn)
			this.fn()
		},
		beforeMount(){
			console.log('3-beforeMount')
			console.log(document.querySelector('p'))
		},
		mounted(){
			console.log('4-mounted')
			console.log(document.querySelector('p'))
			document.querySelector('p').style.color='red'
		},
		beforeUpdate(){
			console.log('5-beforeUpdate')
			// console.log(this.count)
			document.querySelector('p')
			console.log(document.querySelector('p').innerText)
		},
		updated(){
			console.log('6-updated')
			// console.log(this.count)
			document.querySelector('p')
			console.log(document.querySelector('p').innerText)
		},
		beforeUnmount(){
			console.log('7-beforeUnmount')
		},
		unmounted(){
			console.log('8-unmounted')
		}
	}
</script>

<template>
	<div>
		<p>{{ count }}</p>
		<button @click="count++">+1</button>
	</div>
</template>
    

<style scoped>

</style>