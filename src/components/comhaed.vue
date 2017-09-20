<template>
  <div class="hello">
  <h2>{{msg}}</h2>
    <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1"><router-link to='/'>首页</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to='/About'>关于我们</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to='/add'>添加用户</router-link></el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '用户管理系统'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.hello {
  h2 {
    font-size: 26px;
    color: #ccc;
    font-weight: 200;
    margin: 20px 0;
  }
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  a {
    display: block;
    color: #42b983;
    text-decoration:none;
  }
}
</style>
