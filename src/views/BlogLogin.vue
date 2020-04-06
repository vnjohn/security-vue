<template>
  <div>
      <blog-header></blog-header>
      <hr/>
     <form>
       <div>
         用户名:<input type="text" v-model="loginInfoVo.username" placeholder="请输入用户名" />
         <br/>
         密码：<input type="password" v-model="loginInfoVo.password" placeholder="请输入密码" />
         <br/>
         <button v-on:click="login">登录</button>
         <br/>
         登录验证情况：<textarea cols="30" rows="10" v-model="responseResult"></textarea>
       </div>
     </form>
      <hr/>
      <blog-footer></blog-footer>
    </div>
</template>

<script>
  import blogHeader from '@/views/BlogHeader.vue'
  import blogFooter from '@/views/BlogFooter.vue'
  import {setToken} from '@/router/auth.js'
  import {getToken} from '@/router/auth.js'
  export default {
    name: 'login',
    // blogHeader、blogFooter组件给申明到components里面然后在template里面使用
    components: { blogHeader, blogFooter },
    data () {
      return {
        loginInfoVo: { username: '', password: '' },
        responseResult: []
      }
    },
    methods: {
      login () {
        this.$axios
          .post('/myLoginForm?userName='+this.loginInfoVo.username+"&passWord="+this.loginInfoVo.password)
          .then(res => {
            if(res.data.code==200){
            console.log(res.data.msg)
            console.log(res.data.token)
            setToken(res.data.token)
            console.log("获得token为:"+getToken().token)
             this.$router.push("/index")   
            }
           this.responseResult = JSON.stringify(res.data)
          })
          .catch(failResponse => {})
      }
    }
  }
  </script>
<style>
</style>
