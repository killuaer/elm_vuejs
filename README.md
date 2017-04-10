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


## step-0：项目准备
1. 分析设计图把内容切分成几个部分，每部分有哪些功能
2. 处理SVG文件，通过[icomoon](https://icomoon.io/)网站把SVG内容转换成图标字体
3. 项目源码目录构成：
```
...
|---src 							// 源码目录
	|---common						// 公共资源目录
	|	|---font 					
	|	|---js 						
	|	|---stylus					
	|---components					// 组件目录
	|---App.vue 					// vue实例文件
	|---main.js 					// 入口文件
...
```
4. 模拟后台数据：
	- 封装的json数据包含有三部分，商家数据、商品数据和评论数据。
	- 数据的获取需要通过express框架路由接口请求，引入数据、配置express路由和应用路由
	``` 
	// build/dev-server.js
	...													// 省略代码
	var app = express();
	var apiRoutes = express.Router();					
	var appData = require('../data');
	var seller = appData.seller;						// 商家数据
				
	apiRoutes.get('/seller',function(req,res){			// 配置商家数据路由
	  res.json({errno: 0, data: seller});
	});
	...													// 省略类似的路由配置
	app.use('/api',apiRoutes)							// 应用路由
	```


## step-1：页面骨架开发
1. 引入reset.css，清除标签默认样式，然后对应用的viewport进行设置，适应移动端的显示。
```
<meta name="viewport" 
	  content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no">
```
2. 把页面拆成三个区块，header、tab和content,点击tab切换时，content内容会相应的改变，它是通过vue-router实现的。
3. 由于css使用了stylus语法，所以需要`npm install stylus stylus-loader --save-dev`,不然会报错。
4. vue-router的使用：全局应用路由功能 ==> 定义路由映射 ==> 创建router实例并应用映射配置 ==> 设置router-view出口 ==> router实例挂载到根实例
5. 1像素边框实现原理：为要添加1像素边框的元素设置相对定位，再为它添加一个after伪类，该伪类设置为内容为空、1像素上边框、宽度100%和绝对定位，最后再根据不同的dpr对边框进行缩放


## step-2：header组件数据获取和页面结构
1. 在vue的生命周期内，通过vue-resourse异步获取header组件的数据并传递
2. header组件页面结构和样式开发，由外到内再由上到下。
3. 巧用stylus的mixin语法


## step-3：详情弹页层
1. css sticky footer布局,包裹主体内容的div底部留有一定的padding值，底部内容在margin-top为负值，占据包裹容器的留白位置，包裹容器最小高度应为100%，并且高度能随着内部的内容变多而撑高，使得底部内容总能在理想的位置
2. 抽象出star组件
3. 弹出层显示隐藏的过渡效果
4. flex自适应布局

## step-4：商品页左右布局及滚动
1. 商品页布局分为三部分，左侧栏、右侧栏和底部
2. css的flex布局及`display:table`的垂直居中效果
3. 使用better-scroll实现左右联动，检测右侧滚动到哪个分类下的区间值，再判断左侧哪个分类被选中
4. 更新DOM时，它会异步调用this.$nextTick,它才是变化后的DOM数据

## step-5：购物车组件
1. 购物车组件数据的变化依赖于选中的商品数组，其变化有，有无商品和商品总价是否达到配送价的文字和样式的变化

## step-6：购物添加组件及小球动画
1. 添加商品数量时，需要通过Vue.set()全局方法为商品添加属性，不然该属性无法响应式变化
2. 通过transition组件添加过渡效果时，需要确保存在css过渡/动画效果，不然哪怕你指定了正确的类，DOM也不会插入该类的
3. 购物车组件实现小球动画，需要确定添加商品按钮的视口位置，而视口的位置信息需要通过父组件传递到购物车组件，其次这个动画效果只需要进入效果，这就需要用过渡的钩子函数了
