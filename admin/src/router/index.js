import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Test from '@/pages/Test'
import Bullshit from '@/pages/Bullshit'

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'HelloWorld',
		component: HelloWorld
    },
    {
		path: '/test',
		name: 'Test',
		component: Test
    },
    {
		path: '/bullshit',
		name: 'bull',
		component: Bullshit
    }
  ]
})
