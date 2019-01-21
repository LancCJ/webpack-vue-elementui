<template>
  <div class="main">
    <img :src="imgUrl">
    <div>{{message}}</div>
    <div>{{url}}</div>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
  export default {
    data: () => ({
        message: 'Webpack4 + Vue2.X + ElementUI',
        url: 'https://github.com/LancCJ/webpack-vue-elementui.git',
        imgUrl:require("img/webpack-vue-elementui.png")
      })
  }
</script>

<style>
body{
  background: #40D093;
  font: 30px Helvetica, Arial, sans-serif;
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

<style lang="stylus" scoped>
.main 
  width :800px
  height :600px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  text-align: center
  color:white
</style>

