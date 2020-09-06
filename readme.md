# 安装： #
## autoPro.js ##
需要安装autoPro.js在手机端(或者虚拟机上)

# 开始 #
## autoPro.js ##
```ctrl+shift+p``` 搜索 <b>运行脚本</b><br>
在vscode上与虚拟机联调autoPro.js的方法参考：https://www.52pojie.cn/forum.php?mod=viewthread&tid=1169466
## client ##
 启动服务:<br>
node ./client/client

# 文档 #
## login.js
还没有做封装的登入方法
## socket()| autoSocket.js
该文件应被放在虚拟机的autoPro.js的文件夹中
引用java的socket连接方式，对外暴露一个socket(receiveMessage)
## ClassMessage
该文件应被放在虚拟机的autoPro.js的文件夹中
### goToMessagePage()
#### 进入快手的私信页面
### findNameByHistoryList(name)
根据name在历史记录中查找,如果找到了返回true，没找到返回false

### noticeMessage()
如果有人发送消息则根据消息提示进入和该联系人的聊天页面并提取最后一条消息。

### findNameByFollowList(name)
在关注列表中根据name搜索用户

### sendMessage()
在已经进入聊天页面后发送消息







