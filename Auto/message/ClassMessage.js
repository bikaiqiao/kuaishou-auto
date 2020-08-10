var message = {}
//进入私信页面
message.goToMessagePage = function () {
  //点击最左侧按钮
  let click = id("left_btn").findOne().click();
  //点击私信进入私信页面
  var BtnMessage = id("tab_message").findOne();
  var clickBtnMessage = BtnMessage.click();
  sleep(1000)
  //auto.js 4.x版本
  /*
  var contacts = id("name_layout").find()
  var contactsChild = [];
  var selectTextContacts;
  for(let i = 0;i<contacts.size();i++){
    contactsChild[i] = contacts.get(i).child(0).child(0)
    if(contactsChild[i].text() == "纠结26"){
      selectTextContacts = contactsChild[i]
    }
  }
  //联系人名称
  console.log(selectTextContacts.text());
  //根据联系人名称点击进入私信界面
  var selectContactsParent = selectTextContacts.parent().parent().parent()
  selectContactsParent.click();
  */
}
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
//根据发消息人发来的消息提醒进入
//question：如果有多个联系人怎么办
message.noticeMessage = function () {
  let click = id("notify").findOne().parent().click()
  sleep(1000)
  //找到所有消息然后倒叙
  console.show()
  var allMessage = id("message").find()
  // for(i = 0;i<allMessage.size();i++){
  //   console.log(allMessage.get(i).text())
  // }
  var allMessageNum = allMessage.size()
  console.log(allMessage.get(allMessageNum - 1).text())
  return allMessage.get(allMessageNum - 1).text()
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
//发送消息
message.sendMessage = function (text) {
  var editor = id("editor").findOne();
  editor.setText(text)
  var sendBtn = id("send_btn").findOne()
  sendBtn.click();
}

module.exports = message