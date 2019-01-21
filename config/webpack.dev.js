//包引入
const path = require('path')
const root = path.resolve(__dirname, '..') // 项目的根目录绝对路径
const webpack  =  require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require("clean-webpack-plugin")
//打包配置
module.exports = {
    //入口:有且可以有多个
    entry:{
        main:["./src/main.js"]
    },
    //打包环境：开发 &  生产
    mode:"development",
    //出口:有且只有一个
    output:{
        filename:"[name]-bundle.js",
        path:path.resolve(__dirname,"../dist"),
        //公开的路径 影响Html中引入资源
        publicPath:"/"
    },
    resolve: {
      alias: { // 配置目录别名
        vue: 'vue/dist/vue.js',
        // 在任意目录下require('components/example') 相当于require('项目根目录/src/components/example')
        components: path.join(root, 'src/components'),
        views: path.join(root, 'src/views'),
        styles: path.join(root, 'src/styles'),
        store: path.join(root, 'src/store'),
        img: path.join(root, 'src/img')
      },
      extensions: ['.js', '.vue'] // 引用js和vue文件可以省略后缀名
    },
    //本地服务器配置
    devServer:{
        //直接进入dist目录进行浏览
        contentBase:"dist",
        //支持热更新
        hot:true,
        //错误可以显示到HTML上面
        overlay:true
    },
    //本地调试工具
    devtool:"source-map",
    optimization:{
        splitChunks:{
            chunks:'initial' //initial(初始块)、async(按需加载块)、all(全部块)
        }
    },
    //加载器
    module:{
        rules:[
           
            //vue loader
            {
                test: /\.vue$/,
                use:[
                    {
                        loader: 'vue-loader'
                    }
                ],
            }, // 所有.vue结尾的文件，使用vue-loader
            
            //js loader
            {
                test:/\.js$/,
                use:[
                    {
                        //将语法转换
                        loader:"babel-loader"
                    }
                ],
                //哪里的js文件不需要进行转换
                exclude: /(node_modules|bower_components)/
            },
            //css loader
            {
                test: /\.css$/,
                use:[
                    //写入到html中
                    {
                        loader:"style-loader"
                    },
                    //放入main-bundle
                    {
                        loader:"css-loader"
                    }
                ]
            },
            //style stylus loaders
            {
                test: /\.styl(us)$/,
                use:[
                    //写入到html中
                    {
                        loader:"style-loader"
                    },
                    //放入main-bundle
                    {
                        loader:"css-loader"
                    },
                    {
                        loader:"stylus-loader"
                    }
                ]
            },
             //字体 loader
            { 
                test: /.(eot|svg|ttf|woff|woff2)$/,
                use:{
                    loader:"file-loader"
                }
            },
            //html loaders
            {
                test:/\.html$/,
                use:[
                    //相当于一个流程管理者，当发现一个HTML然后就调用file-loader然后在使用extract-loader进行分隔
                    {
                        loader:"html-loader",
                        options:{
                            attrs:["img:src"]
                        }
                    }
                ]
            },
            //img loader  可以添加hash值 [hash:8] 8位 在 name中
            {
                test:/\.(jpg|gif|png|jpeg)$/,
                use:[
                    {
                        loader:"file-loader",
                        options:{
                            name:"img/[name].[ext]"
                            //name:"img/[name]-[hash:8].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            template: path.join(root, 'src/index.html'), // 模板文件
            inject: 'body' // js的script注入到body底部
        }),
        //热更新配置
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin([path.join(root, 'dist')]),//运行前删除dist目录
        
    ]
}