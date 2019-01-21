/**
 * 主要写的启动服务器
 */
const express = require('express')
const path =require('path')

//创建服务器
const server = express()

//配置启动路劲
const sraticMiddleware = express.static('dist')

//配置自动监听代码 
const webpack = require('webpack')
const config =require('../../config/webpack.dev.js')
const complier = webpack(config)
const webpackDevMiddleware= require('webpack-dev-middleware')(complier,config.devServer)

//配置热更新
const webpackHotMiddleware=require('webpack-hot-middleware')(complier)

//使用下配置
server.use(webpackDevMiddleware)
//必须卸载webpackDevMiddleware,sraticMiddleware中间
server.use(webpackHotMiddleware)
server.use(sraticMiddleware)
//debugger
//监听端口
server.listen(8080,() =>{
    console.log('server is running......');
})