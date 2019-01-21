<template>
  <div class="main">
    <img :src="imgUrl">
    <div>{{message}}</div>
    <div>{{url}}</div>
  </div>
</template>

<script>
  export default {
    data: () => ({
        message: 'Webpack4 + Vue2.X',
        url: 'https://github.com/LancCJ/vue-scaffold.git',
        imgUrl:require("img/vue-scaffold.png")
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

