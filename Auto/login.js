// launchApp("快手");

function login(phone, pwd) {
  var phone_number = id("phone_et").findOne()
  var password_number = id("password_et").findOne()
  if (text("手机号登录").findOne()) {
    if (phone_number.text() == "请输入手机号") {
      phone_number.setText(phone)
      password_number.setText(pwd)
    } else {
      //未来可以接入数据库做账号密码判断，根据已有账号输入密码
      password_number.setText(pwd)
    }
    text("登录").findOne().parent().click()
  } //另一种情况已经登入
  else {
    console.log("已经登入，进入消息页面")
    text("消息").findOne().parent().click()
    desc("私信").findOne().click()
  }
}

login(13943110476,199910021)