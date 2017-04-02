# elm_vuejs

> 饿了么项目实战分解

## 构建配置

``` bash
# 安装依赖
npm install

# 在localhost:8088服务上运行，端口号可通过'config/index.js'文件中的port属性进行设置
npm run dev

# 快速构建产品
npm run build

```

## 前言
> 站在巨人的肩膀上，我们能看得更远。

首先，感谢慕课网上Ustbhuangyi制作的[vue.js实战视频](http://coding.imooc.com/class/74.html)，下面的内容是我观看视频后的个人理解，望多多支持原作者，相信你们会有更多的收获。

1. 前置知识：html、css3、JavaScript、es6、vue.js、node.js

2. 技术栈：vue2+vue-router+vue-resource+webpack+es6+eslint+flex

3. MVVM框架：数据(model)与视图(view)的交互是通过中间件(viewmodel)实现的，数据的变化会被viewmodel观察到然后通知视图做出改变，同时视图上的操作也会被viewmodel监听到然后通知数据做出改变。

4. vue.js核心思想：数据驱动和组件化
 	-  数据驱动：vue实例化的过程中，它会运用es5的Object.defineProperty把数据转为getter/setter，再放到相应的watcher实例对象中等待依赖，渲染视图时，视图上的指令会在watcher实例中寻找数据，当vue实例数据的setter被调用，会通知到watcher实例，watch实例会对比数据是否更新，更新了就通知视图做出改变。
 	-  组件化：扩展HTML元素，封装可重用的代码。每个组件都有自己的工程目录，就近维护组件的资源，组件的自由组合可以形成自己想要的页面。

5. vue-cli：它是vue.js的脚手架工具，能帮我们写好基础的代码，包括目录结构、本地调试、代码部署、热加载和单元测试等工作。构建出来的目录中，bulid和config目录存放的是webpack配置相关的文件，node_modules目录存放npm install安装的依赖代码库，src目录存放项目开发源码，static目录存放第三方静态资源。

6. 项目运行过程：`npm run dev` ==> `node build/dev-server.js` ==> 检查当前版本的npm和node.js ==> 配置当前shell环境采用开发环境(另一个是产品环境) ==> 取得webpack的node.js的API并应用webpack配置 ==> 应用webpack-dev-middleware ==> 应用webpack-hot-middleware ==> 配置代理api请求 ==> 创建一个express应用app ==> app使用'webpack-dev-middleware'中间件(服务中webpack打包输出) ==> app使用'webpack-hot-middleware'中间件(热加载数据) ==> 配置app的静态资源 ==> app监听端口并启动服务 ==> webpack-dev-middleware中间件等到初始化完成后启动浏览器






















