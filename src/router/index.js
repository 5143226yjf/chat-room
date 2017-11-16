import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '../components/auth/login/index.vue'
import Register from '../components/auth/register/index.vue'
import Home from '../components/home/index.vue'
import ChatView from '../components/home/chatView/index.vue'
import MyInfo from '../components/home/myInfo/index.vue'
import FriendList from '../components/home/friendList/index.vue'
import ChatList from '../components/home/chatList/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      redirect: '/login'
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/register',
      name: '注册',
      component: Register
    },
    {
      path: '/home/chat/:userId',
      name: '聊天页',
      component: ChatView
    },
    {
      path: '/home',
      name: '主页',
      component: Home,
      redirect: '/home/chat-list',
      children: [
        {
          path: 'myinfo',
          name: '我的中心',
          component: MyInfo
        },
        {
          path: 'friend',
          name: '好友',
          component: FriendList
        },
        {
          path: 'chat-list',
          name: '聊天列表',
          component: ChatList
        }
      ]
    }

  ]
})
