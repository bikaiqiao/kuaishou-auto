var message = {}
//在私信页面直接查找要发送消息的人
message.findNameByHistoryList = function (name) {
  var contacts = id("name").find()
  for (let i = 0; i < contacts.size(); i++) {
    if (contacts.get(i).text() == name) {
      contacts.get(0).parent().click()
      return true
    } else {
      console.log("消息历史中没有这个人")
      return false
    }
  }
}
//在关注列表中搜索用户名
message.findNameByFollowList = function (name) {

  var clickRightBtn = id("right_btn").findOne().click()

  var clickSendMessage = text("发私信").findOne().parent().click()
  sleep(2000)
  var textSearch = text("搜索").findOne().setText(name)
  console.log(textSearch)

  var findName = id("name").find()

  console.log(findName)
  //搜索出用户以后选择第一个
  //
  if (findName.get(0).parent()) {
    findName.get(0).parent().click()
  }
}
//根据发消息人发来的消息提醒进入
//question：如果有多个联系人怎么办
message.noticeMessage = function () {
  let Notify = null
  let content = null;
  while (Notify == null) {
    Notify = id("notify").findOne(1000)
    log("重新寻找")
  }
  log("找到消息")
  var target = Notify.parent()
  var UserName = target.child(1).text()
  target.click()
  var isImage = Notify.parent().child(3).text()

  sleep(1000)
  //如果是图片的话找到image组件，并且修改content的值
  //否则转发消息
  if (isImage == '[图片]') {
    //找到图片并进行图片转码
    //保存图片操作
    sleep(500);
    sleep(500);
    var imagePosition = id('image').findOne().bounds()
    var clickImage = click(imagePosition.centerX(), imagePosition.centerY())
    sleep(500);
    press(1080 / 2, 1920 / 2, 1000)
    text('保存').findOne().parent().click()
    click(1080 / 2, 1920 / 2)
    //读取图片为base64操作
    sleep(500);
    var arr = files.listDir("/storage/emulated/0/DCIM/");
    var hiddenName = files.getExtension("/storage/emulated/0/DCIM/" + arr[0])
    log(files.getExtension("/storage/emulated/0/DCIM/" + arr[0]))
    var img = images.read("/storage/emulated/0/DCIM/" + arr[0]);
    //对图片进行操作
    var imageBase64 = images.toBase64(img, hiddenName, 100)
    content = 'data:image/' + hiddenName + ';base64' + imageBase64
    log(imageBase64)
    // 回收图片
    img.recycle();
    //删除图片文件
    var remove = files.remove("/storage/emulated/0/DCIM/" + arr[0])
  } else {
    //找到所有消息然后倒叙
    var allMessage = id("message").find()
    // for(i = 0;i<allMessage.size();i++){
    //   console.log(allMessage.get(i).text())
    // }
    var allMessageNum = allMessage.size()
    var str = JSON.stringify(allMessage.get(allMessageNum - 1))
    var n = str.search(/mSourceNodeId/);
    var str2 = str.substring(n + 15, n + 34)
    content = allMessage.get(allMessageNum - 1).text()
    console.log(allMessage.get(allMessageNum - 1).sourceNodeId())
    console.log(str2)
  }
  var messagePayload = {
    fromUserName: 'bot',
    toUserName: UserName,
    msgId: str2,
    content: content
  }
  var strMessagePayload = JSON.stringify(messagePayload)
  return strMessagePayload
}
//发送消息
message.sendMessage = function (text) {
  var editor = id("editor").findOne();
  log("收到客户端传来的消息" + text)
  editor.setText(text)
  sendBtn = id("send_btn").findOne(100)
  sendBtn.click();
}

module.exports = message