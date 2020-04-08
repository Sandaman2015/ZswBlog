《ZswBlog 2.0开源前端》

项目地址：https://www.zswblog.xyz

2020-03-28 --------------------------------------------------------------------------------------1.3记录

今天将媒体查询彻底完善了，目前网页已经全面支持手机端页面浏览，同时修改首页的video的音量控制，对与关于页面的手机端采取了较大的变动，

放弃了标签和生活分享页面。

优化了css结构和一些已知的页面参数传递。

2020-03-23 --------------------------------------------------------------------------------------1.2记录

今天优化了页面css结构，增加了友盟的网站统计，同时将Live2D的引入改为本地加载，因为CDN会消耗http请求，浪费服务器带宽，比较慢所以我改为了本地的。

将打包的配置写了一些注释

2020-03-22 --------------------------------------------------------------------------------------1.1记录

今天更新了一些前端逻辑和删除了无效的live2D元素和一些不必要的模块

将音乐地址和视频的封面图片转到了本地json文件下

将页面字体修改了，也修改了友情链接的的样式，增加了宽高，修改了标签页面的标题颜色，看起来更舒服了

新添加了Live2D到页面，通过CDN的引入方式。

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

--------------------------------------------------------------------------------------------------------------

下面是运行需要：

1、Npm install

2、Npm run dev

4、首页的video在data文件下的json字符串修改


ps:所有的API都是选自我自己博客的API所以在搭建后台项目时请对照我的请求后返回的Json文件进行设置对象

如果存在无法运行或报错，请直接联系我，我会一直帮助大家解决问题；

我的联系方式QQ：1761317983

加我好友请备注github源码问题！谢谢！

