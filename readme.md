# 安装： #
## autoPro.js ##
需要安装autoPro.js在手机端(或者虚拟机上)

# 开始 #
## autoPro.js ##
```ctrl+shift+p``` 搜索 <b>运行脚本</b><br>
入口文件为auto.js
在vscode上与虚拟机联调autoPro.js的方法参考：https://www.52pojie.cn/forum.php?mod=viewthread&tid=1169466
## client ##
 启动测试服务:<br>
node ./client/client<br/>
该测试服务的代码最终将会被移植到puppet上（目前已完成对消息的移植）

## 运行顺序
为了防止消息监听的失效，应该按照以下步骤运行
1. first start up autoPro.js
2. second start up kuaishou app
3. third enter the message page
4. fourth start up the script(as server)
5. fifth start up the puppet


# 文档 #
## login(phone,pwd)
phone:登入需要的手机号<br/>
pwd:密码
登入的相关操作
## ClassMessage
该文件应被放在虚拟机的autoPro.js的文件夹中
### findNameByHistoryList(name)
根据name在历史记录中查找,如果找到了返回true，没找到返回false

### noticeMessage()
如果有人发送消息则根据消息提示进入和该联系人的聊天页面并提取最后一条消息。

### findNameByFollowList(name)
在关注列表中根据name搜索用户

### sendMessage()
在已经进入聊天页面后发送消息，目前支持文字和图片类型消息。（图片会被转码成base64然后发送）

## room.js
存放关于群管理的文件
### room_create(create_room_name,create_room_info)
create_room_name:群名称<br/>
create_room_info:群信息
### invite(invited_userName)
invited_userName:被邀请人的名称<br/>
该方法可以邀请一个用户到群聊中

## dialogs.js
存放关于弹窗处理的文件


## completeProcess.js
理想状态下的完整代码流程







