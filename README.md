# vue-tourism

> 旅行类WebApp

## Build Setup

``` bash
# clone 地址
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

```

## 前言 ##
从看了慕课上面黄易老师的饿了么课程后，总感觉学了VUE之后要做点什么，趁着热情兴趣还在，自己也用VUE全家桶写了一个旅游类的APP,为什么选择做旅游类的呢？？呵呵，我不会告诉你虽然很多地方都没去，但是可以意淫啊啊啊啊。
### 地址  ###
  *   [github地址](https://github.com/zhijunw/vue-tourism)
 *   觉得喜欢的可以star一下，养成举手之劳的美德。哈哈哈。如果有什么不足欢迎issue。
  
### 项目描述  ###

#### 前端部分 ####
*   实现了轮播图，自己手写的轮播图组件

*   登录页面 用了LocalStorage  记录登录状态。

*   精选页面 用了滚动插件 黄易老师的组件 better-scroll，其中的坑下面在介绍。

*   精选商品页面，收藏 和 赞 就用到了vuex（本来不想用，用localStorage 也能实现，但是用了VUE 给点面子总的用用vuex吧。）。然后，星星组件，右边底部的动画，以及滚动菜单，评论组件。

*   目的地页面，左边滚动菜单对应右边的选项，并添加样式。

*   目的地详情页面，实现的横向滚动。

*   中间的添加页面，里面的弹窗用了slot插槽，雷达按钮动画。

*   我的页面，收藏页面的数据对应精选里面的收藏按钮。

####  后端部分  ####
*    用express 写的路由接口

*    数据方面，由于没找想要的api,只能自己写json 造数据，写数据结构想了又想，还一个一个的在网上copy图片和文字，心好累，还好兴趣支撑着。

### 待开发功能 ###
*   购物车页面。

*   搜索目的地页面。

*   我的行程的编辑然后在 我的 路由的place 显示

*   组件的优化。

### 详情 ###
 *   登录展示
![图片](https://ws1.sinaimg.cn/large/8d59b975ly1fiq4ekvzy8g20ey0ignpd.jpg)


*   精选页面1
![图片](https://ws1.sinaimg.cn/large/8d59b975ly1fiq4cjb70ig209k0dchdt.jpg)
*  精选页面2
![图片](https://ws1.sinaimg.cn/large/8d59b975ly1fiq4dj37atg20ey0ighdt.jpg)

*   目的地
![图片](https://ws1.sinaimg.cn/large/8d59b975gy1fipm3ugxdvg209g0dce81.jpg)

*    我的行程
![图片](https://ws1.sinaimg.cn/large/8d59b975ly1fipm1id6fbg208s0dc15p.jpg)



*   组件
![图片](https://ws1.sinaimg.cn/large/8d59b975ly1fipm1immeyj20m60j3abo.jpg)

*  路由
![图片](https://ws1.sinaimg.cn/large/8d59b975ly1fipm1jcw9ij20rd0jltdt.jpg)

*  store
![图片](https://ws1.sinaimg.cn/large/8d59b975ly1fipm1ju536j20r90idwhn.jpg)



### 技术栈 ###
*   VUEX,Vue-Router,Vue-Resource,slot,es6，less。

*  移动端布局 felx(神器)，各种花式用flex,横向自定义宽度居中，纵向sticky-footer布局，两栏布局，左边固定，右边适应。get到一个技巧,padding-top:100%,实现图片的加载。移动端1px的问题。

### 痛点  ###
*   在实现精选详情页里面的收藏 和赞 的功能中，在当前页面点了赞和收藏 返回之后在下个页面中显示上个页面的状态，本来不想用vuex，不过用起来真的爽。如下

解决方法在精选页面点击之前做判断，如下
![图片](https://ws1.sinaimg.cn/large/8d59b975ly1fipm1kgx2xj20rl0g8q75.jpg)
*   better-scroll 的坑，由于better-scroll是操作DOM的，把要执行的滚动函数尽可能的放在 updated钩子函数中，并且要放在$this.nextTick()中。它的滚动原理是要子元素的高度要大于父元素的高度，所以才会产生滚动，故CSS的代码要写好 如
 
        parent{
        position: absolute;
        top: 64px;
        bottom: 50px;
        z-index: 70;
        overflow: hidden}
 呵呵呵，你以为这就算爬坑了吗，太简单了。当你的图片或者文字过多的时候，调试器上面虽然可以看到 DOM已经加载，better-scroll已经渲染，但是为什么一进页面滚动不了？要刷新之后才能继续滚动？？试试在滚动函数里面加一个延迟吧。

*   关于钩子函数 mounted 和updated 的坑，你趟过吗？mounted钩子函数 不表示组件已在document中！！！！！，也就有些时候一些报错说，this.$refs.element.style.width ，style 不能修改被修改。试试把他放在updated里面执行吧。



###  总结 ###
*   组件间通信，我的原则是用props,eventBus能解决的 就不要用vuex。但是当props,eventBus不能解决或者比较繁琐的时候，那就毫不犹豫的用vuex吧。
*   组件间传值，当你想要在子组件获得的父组件的属性 中添加一个值 并且和父组件的属性关联的时候，那就用vue.set(this.select,count,1)吧，很方便有用。
*   未完成的会一直更新，再接再厉。


  [1]: /img/bVTf69
  [2]: /img/bVTgm6
  [3]: /img/bVTgbs
  [4]: /img/bVTgbv
  [5]: /img/bVTgbA
  [6]: /img/bVTgdp
