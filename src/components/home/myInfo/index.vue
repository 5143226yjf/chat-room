<template>
  <div class="myinfo">
    <img src="./imgs/background.jpg" class="background">
    <div class="info">
      <div class="head-pic">
        <img src="./imgs/head-pic.jpeg"/>
      </div>
      <div class="info-del">
        <div class="info-name">
          <span>忘川</span>
          <span><img src="./imgs/woman.png"/>江西 赣州</span>
        </div>
        <mu-list>
          <mu-list-item title="18716037958">
            <mu-icon slot="left" value="inbox"/>
          </mu-list-item>
          <mu-list-item title="1443646652@qq.com">
            <mu-icon slot="left" value="drafts"/>
          </mu-list-item>
          <mu-list-item title="抬手牵流岚，举步过忘川">
            <mu-icon slot="left" value="grade"/>
          </mu-list-item>
        </mu-list>
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
