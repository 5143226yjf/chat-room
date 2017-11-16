<template>
  <div>
    <mu-appbar title="聊天室">
      <mu-icon-button icon="menu" slot="left"/>
      <mu-icon-menu slot="right" icon="expand_more" tooltip="操作">
        <mu-menu-item title="退出登录" @click="logout"/>
      </mu-icon-menu>
      <!--<mu-icon-button icon="expand_more" slot="right"/>-->
    </mu-appbar>
    <div class="content">
      <router-view></router-view>
    </div>
    <mu-paper>
      <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
        <mu-bottom-nav-item value="消息" title="消息" icon="chat_bubble" to="/home/chat-list"/>
        <mu-bottom-nav-item value="联系人" title="联系人" icon="people" to="/home/friend"/>
        <mu-bottom-nav-item value="我的" title="我的" icon="star" to="/home/myinfo"/>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        bottomNav: '消息',
        bottomNavColor: '消息',
        bottomPopup: false
      }
    },
    methods: {
      handleChange (val) {
        this.bottomNav = val
      },
      logout () {
        window.location.href = '/login'
      }
    }
  }
</script>
<style scoped>
  .mu-appbar{
    position: fixed;
    top: 0;
    background: #e53935;
  }
  .mu-bottom-nav{
    position: fixed;
    bottom: 0;
    background: #e53935;
  }
  .content{
    margin: 60px 0;
  }
  .demo-popup-bottom {
    width: 100%;
    max-width: 375px;
  }
</style>
