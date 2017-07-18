<template>
  <mobile-tear-sheet>
    <mu-list>
      <mu-list-item title="我的好友" toggleNested>
        <mu-list-item title="Mike Li" slot="nested">
          <mu-avatar :src="img" slot="leftAvatar"/>
          <mu-icon value="chat_bubble" slot="right"/>
        </mu-list-item>
        <mu-list-item title="Maco Mai" slot="nested">
          <mu-avatar :src="img" slot="leftAvatar"/>
          <mu-icon value="chat_bubble" slot="right"/>
        </mu-list-item>
        <mu-list-item title="Alex Qin" slot="nested">
          <mu-avatar :src="img" slot="leftAvatar"/>
          <mu-icon value="chat_bubble" slot="right"/>
        </mu-list-item>
        <mu-list-item title="Allen Qun" slot="nested">
          <mu-avatar :src="img" slot="leftAvatar"/>
          <mu-icon value="chat_bubble" slot="right"/>
        </mu-list-item>
      </mu-list-item>
      <mu-list-item title="同学" toggleNested>
        <mu-list-item title="Mike Li" slot="nested">
          <mu-avatar :src="img" slot="leftAvatar"/>
          <mu-icon value="chat_bubble" slot="right"/>
        </mu-list-item>
        <mu-list-item title="Maco Mai" slot="nested">
          <mu-avatar :src="img" slot="leftAvatar"/>
          <mu-icon value="chat_bubble" slot="right"/>
        </mu-list-item>
        <mu-list-item title="Alex Qin" slot="nested">
          <mu-avatar :src="img" slot="leftAvatar"/>
          <mu-icon value="chat_bubble" slot="right"/>
        </mu-list-item>
        <mu-list-item title="Allen Qun" slot="nested">
          <mu-avatar :src="img" slot="leftAvatar"/>
          <mu-icon value="chat_bubble" slot="right"/>
        </mu-list-item>
      </mu-list-item>
      <mu-list-item title="家人" toggleNested>
        <mu-list-item title="Mike Li" slot="nested">
          <mu-avatar :src="img" slot="leftAvatar"/>
          <mu-icon value="chat_bubble" slot="right"/>
        </mu-list-item>
        <mu-list-item title="Maco Mai" slot="nested">
          <mu-avatar :src="img" slot="leftAvatar"/>
          <mu-icon value="chat_bubble" slot="right"/>
        </mu-list-item>
        <mu-list-item title="Alex Qin" slot="nested">
          <mu-avatar :src="img" slot="leftAvatar"/>
          <mu-icon value="chat_bubble" slot="right"/>
        </mu-list-item>
        <mu-list-item title="Allen Qun" slot="nested">
          <mu-avatar :src="img" slot="leftAvatar"/>
          <mu-icon value="chat_bubble" slot="right"/>
        </mu-list-item>
      </mu-list-item>
    </mu-list>
  </mobile-tear-sheet>
</template>
<script>
  import headPic from './imgs/head-pic.jpeg'
  export default {
    props: [],
    data () {
      return {
        img: headPic
      }
    }
  }
</script>
<style scoped></style>
