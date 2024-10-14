import { createRouter, createWebHashHistory } from 'vue-router'

import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Friend from '@/views/Friend.vue'
import _404 from '@/views/404.vue'
import { createWebHistory } from 'vue-router'

import Recommend from '@/views/Recommend.vue'
import TopList from '@/views/TopList.vue'
import PlayList from '@/views/PlayList.vue'

const router = createRouter({
	// history:createWebHashHistory(),
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			redirect: '/find'
		},
		{
			path: '/find',
			component: Find,
			redirect:'/find/recommend',
			children: [
				{ 
					path: 'recommend',
					component:Recommend
				},{
					path:'toplist',
					component:TopList
				},{
					path:'platlist',
					component:PlayList
				}
			]
		},
		{
			path: '/my',
			component: My
		},
		{
			path: '/friend',
			component: Friend
		},
		{
			path: '/:pathMatch(.*)*',
			component: _404
		}
	]
})
const isLogin=false
router.beforeEach((to,from)=>{
	if(isLogin===false&&to.path==='/my'){
		alert('请先登录')
		return false
	}else{
		return true
	}
})
export default router
