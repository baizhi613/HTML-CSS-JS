import {createRouter,createWebHashHistory} from 'vue-router'

import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Friend from '@/views/Friend.vue'

const router=createRouter({
    history:createWebHashHistory(),
    routes: [
        {
            path:'/find',
            component:Find
        },
        {
            path:'/my',
            component:My
        },
        {
            path:'/friend',
            component:Friend
        }
    ]
})

export default router
