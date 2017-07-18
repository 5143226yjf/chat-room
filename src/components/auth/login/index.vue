<template>
  <div class="login">
    <div class="nav">登录</div>
    <form>
      <div class="item">
        <label>用户名：</label>
        <input type="text" v-model="name"/>
      </div>
      <div class="item">
        <label>密码：</label>
        <input type="password" v-model="pass"/>
      </div>
    </form>
    <div class="btn">
      <mu-raised-button label="登录" class="button" backgroundColor="#e53935" secondary @click="login"/>
      <mu-raised-button label="注册" class="button" backgroundColor="#ffffff" color="#e53935" to="/register" secondary/>
    </div>
  </div>
</template>
<script>
//  import { button } from 'muse-ui'
  export default {
    props: [],
    methods: {
      login () {
        window.location.href = '/home'
      }
    }
  }
</script>
<style scoped src="./index.styl" lang="stylus"></style>
