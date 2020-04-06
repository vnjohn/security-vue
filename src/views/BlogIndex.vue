<template>
<div>
    <blog-header></blog-header>
    <hr/>
    <div>
      这是首页，嘻嘻嘻。
      <button v-on:click="targeAdmin">我是管理员</button>
      <button v-on:click="targeUser">我是用户</button>
    </div>
    <div>
      <textarea v-model="msg" cols="50" rows="20"></textarea>
    </div>
    <hr/>
    <blog-footer></blog-footer>
  </div>
</template>

<script>
import blogHeader from '@/views/BlogHeader.vue'
import blogFooter from '@/views/BlogFooter.vue'

export default {
  name: 'BlogIndex',
  // blogHeader/blogFooter组件给申明到components里面然后在template里面使用
  components: { blogHeader, blogFooter },
  data(){
    return {
      msg:''
    }
  },
  methods:{
    targeAdmin () {
      this.msg=''
      this.$axios
        .get('/admin/adminRoleList').then(res => {
          this.msg= JSON.stringify(res.data)
           console.log(res.data.title)
        })
        .catch(failResponse => {})
    },
    targeUser(){
      this.msg=''
      this.$axios.get("/user/info").then(res => {
         this.msg= JSON.stringify(res.data)
         console.log(res.data.title)
      })
      .catch(failResponse => {})
    }
  }
}
</script>

<style>
</style>
