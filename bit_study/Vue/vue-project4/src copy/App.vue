<script setup>
	import {ref} from 'vue'
	import LifeCycle from './components/LifeCircle.vue'
	const isAlive=ref(true)
</script>

<template>
	<LifeCycle v-if="isAlive"></LifeCycle>
</template>

<style scoped>

</style>