# 安装： #
## autoPro.js部分 ##
需要安装autoPro.js在手机端(或者虚拟机上)
## server部分 ##
安装koa的必要插件
```
npm install koa
npm install koa-route
npm install koa-websocket
```

# 开始 #
## autoPro.js ##
```ctrl+shift+p``` 搜索 <b>运行脚本</b><br>
在vscode上与虚拟机联调autoPro.js的方法参考：https://www.52pojie.cn/forum.php?mod=viewthread&tid=1169466
## server ##
 启动服务:<br>
node ./server/server

# 项目结构 #
```
|-- Auto-----------------------Auto.js文件夹
    |   |-- auto.js------------自动打开快手，登入
    |   |-- autoWS.js----------websocket操作
    |   |-- message.js---------打开消息页面
    |-- server
        |-- index.html---------websocket连接测试
        |-- server.js----------服务端
```







