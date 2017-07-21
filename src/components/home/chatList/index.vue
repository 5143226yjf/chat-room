<template>
  <mobile-tear-sheet name="chatList">
    <mu-list>
      <mu-sub-header>最近聊天记录</mu-sub-header>
      <mu-list-item title="Mike Li">
        <mu-avatar :src="img" slot="leftAvatar"/>
        <span slot="describe">
          <span style="color: rgba(0, 0, 0, .87)">哇去</span><br/> 实在编不下去，这就是个demo
        </span>
        <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
          <mu-menu-item title="回复" />
          <mu-menu-item title="标记" />
          <mu-menu-item title="删除" />
        </mu-icon-menu>      </mu-list-item>
      <mu-list-item title="Maco Mai">
        <mu-avatar :src="img" slot="leftAvatar"/>
        <span slot="describe">
          <span style="color: rgba(0, 0, 0, .87)">去打游戏啊</span><br/>
          周末一起 LOL
        </span>
        <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
          <mu-menu-item title="回复" />
          <mu-menu-item title="标记" />
          <mu-menu-item title="删除" />
        </mu-icon-menu>      </mu-list-item>
      <mu-list-item title="Alex Qin">
        <mu-avatar :src="img" slot="leftAvatar"/>
        <span slot="describe">
          <span style="color: rgba(0, 0, 0, .87)">去打游戏啊</span><br/>周末一起 LOL
        </span>
        <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
          <mu-menu-item title="回复" />
          <mu-menu-item title="标记" />
          <mu-menu-item title="删除" />
        </mu-icon-menu>      </mu-list-item>
      <mu-list-item title="Allen Qun">
        <mu-avatar :src="img" slot="leftAvatar"/>
        <span slot="describe">
          <span style="color: rgba(0, 0, 0, .87)">去打游戏啊</span><br/>周末一起 LOL
        </span>
        <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
          <mu-menu-item title="回复" />
          <mu-menu-item title="标记" />
          <mu-menu-item title="删除" />
        </mu-icon-menu>      </mu-list-item>
      <mu-list-item title="Myron Liu">
        <mu-avatar :src="img" slot="leftAvatar"/>
        <span slot="describe">
          <span style="color: rgba(0, 0, 0, .87)">去打游戏啊</span><br/>周末一起 LOL
        </span>
        <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
          <mu-menu-item title="回复" />
          <mu-menu-item title="标记" />
          <mu-menu-item title="删除" />
        </mu-icon-menu>      </mu-list-item>
    </mu-list>
    <mu-divider/>
    <mu-list>
      <mu-sub-header>历史聊天记录</mu-sub-header>
      <mu-list-item title="Gaia Zhou">
        <mu-avatar :src="img" slot="leftAvatar"/>
        <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
          <mu-menu-item title="回复" />
          <mu-menu-item title="标记" />
          <mu-menu-item title="删除" />
        </mu-icon-menu>      </mu-list-item>
      <mu-list-item title="Miller Wang">
        <mu-avatar :src="img" slot="leftAvatar"/>
        <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
          <mu-menu-item title="回复" />
          <mu-menu-item title="标记" />
          <mu-menu-item title="删除" />
        </mu-icon-menu>      </mu-list-item>
    </mu-list>
  </mobile-tear-sheet>
</template>

<script>
  import headPic from './imgs/head-pic.jpeg'
  export default {
    data () {
      return {
        img: headPic
      }
    }
  }
</script>
<style scoped src="./index.styl" lang="stylus"></style>
