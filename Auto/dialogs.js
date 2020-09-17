var dialogs = {}

//如果有版本升级的弹窗则自动关闭
dialogs.update = function () {
  if (text("立即升级").findOne(2000)) {
    id("iv_close").findOne().click()
  }
}
dialogs.prodectYoung = function () {
  //青少年保护
  className("android.widget.LinearLayout").depth(4).findOne(2000)
}

dialogs.recommendFriend = function () {
  //好友推荐
  if(id("title_view").findOne(2000)){
    id("close_btn").findOne().click()
  }
}

module.exports = dialogs;