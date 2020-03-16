《ZswBlog 2.0开源前端》

项目地址：https://www.zswblog.xyz

2020-03-15 --------------------------------------------------------------------------------------1.0记录

今天我生日，我开源了我博客的前端源代码

这是一个多页面的Vue脚手架程序代码
区别于SPA单页面他不通过路由进行跳转而是通过配置多页面去跳转。

我将组件复用的概念运用进去，由于我本来就有MVC的开发经验，所以开发这个页面也还算速度比较快了。
耗时半个月，一共分为8个页面，其中注册邮箱页面时单独加上去的，有的页面还运用到了Vue路由进行切换。

这次我吸取了我开发博客1.0版本的教训，能抛弃掉多余的js框架就抛弃掉，但是我还是运用了jquery，但是只是为了页面的动画。
相比较Vue，Jquery控制Dom还是我最熟悉的。

这次我运用了很多的新组件、动画插件、以及一些跨域配置访问
值得一提的是，我在1.0的Ajax请求时对所有的js进行了封装请求，所以在2.0当中我也这么做了，很多都是网上借鉴的代码，
但是想要跑得先学会走嘛，我利用axios的请求统一配置了API的访问，但是并不是所有的请求都是统一的，对于非后台API我还是单独去写了axios请求。

这个项目你理解起来还是有点绕的，但是我会在后续的版本中进行迭代和完善文档，争取让他能进入到Hexo的博客主题模板中！

下面是运行需要：

1、Npm install

2、Npm run dev

3、所有的API都是选自我自己博客的API所以在搭建后台项目时请对照我的请求后返回的Json文件进行设置对象

4、首页的video在data文件下的json字符串修改

如果存在无法运行或报错，请直接联系我，我会一直帮助大家解决问题；

我的联系方式QQ：1761317983

加我好友请备注github源码问题！谢谢！

