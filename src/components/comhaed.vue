<template>
  <div class="hello">
    <h2>{{msg}}</h2>
    <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
      <router-link to='/'>
        <el-menu-item index="1">首页</el-menu-item>
      </router-link>
      <router-link to='/About'>
        <el-menu-item index="2">关于我们</el-menu-item>
      </router-link>
      <router-link to='/add'>
        <el-menu-item index="3">添加用户</el-menu-item>
      </router-link>
      <el-submenu index="4">
        <template slot="title">工作台</template>
        <el-menu-item index="4-1">消息</el-menu-item>
        <el-menu-item index="4-2">设置</el-menu-item>
        <el-menu-item index="4-3">退出</el-menu-item>
      </el-submenu>
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
.el-submenu {
  float: right;
}
.el-submenu .el-menu-item {
  max-width: 150px !important;
}

</style>
