<template>
  <div class="chat">
    <div class="chat-nav">
      <span @click="backTo"> < {{chatName}}</span>
    </div>
    <div class="chat-info">
      <ul>
        <li v-for="msg in sendMsg">
          <div class="msg-detail">
            <img :src="msg.img"/>
            <span v-text="msg.message"></span>
          </div>
        </li>
      </ul>
    </div>
    <div class="send-message">
      <input type="text" title="chat" v-model="message"/>
      <button :style="sendBtnStyle" @click="send">发送</button>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        chatName: this.$route.params.userId,
        message: '',
        sendBtnStyle: '',
        sendMsg: [
          {
            img: require('./imgs/head-pic.jpeg'),
            message: 'hahhahhahhha'
          }
        ]
      }
    },
    mounted () {
      console.log(this.$route.params)
    },
    watch: {
      message (val) {
        if (val) {
          this.sendBtnStyle = {
            background: '#e53935'
          }
        } else {
          this.sendBtnStyle = {
            background: '#ddd'
          }
        }
      }
    },
    methods: {
      send () {
        if (this.message) {
          console.log(this.message)
          this.sendMsg.push({
            img: require('./imgs/head-pic.jpeg'),
            message: this.message
          })
          this.message = ''
        }
      },
      backTo () {
        window.location.href = '/home'
      }
    }
  }
</script>
<style scoped lang="stylus" src="./index.styl">
</style>
