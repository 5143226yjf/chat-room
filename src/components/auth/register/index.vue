<template>
  <div class="register">
    <div class="nav">
      <router-link class="back" to="/login"><</router-link>
      注册</div>
    <form>
      <div class="item">
        <label>用户名：</label>
        <input type="text" v-model="name"/>
      </div>
      <div class="item">
        <label>密码：</label>
        <input type="password" v-model="pass"/>
      </div>
      <div class="item">
        <label>确认密码：</label>
        <input type="password" v-model="rePass"/>
      </div>
    </form>
    <div class="btn">
      <mu-raised-button label="注册" class="button" backgroundColor="#e53935" secondary/>
    </div>
  </div>
  </div>
</template>
<script>
  export default {
    props: []
  }
</script>
<style scoped src="./index.styl" lang="stylus"></style>
