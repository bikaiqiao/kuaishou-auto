launchApp("快手");
//点击登入按钮
var searchButton = id("left_text").findOne();
searchButton.click();
//点击其他登入方式
var otherLoginButton = id("other_login_tv").findOne();
otherLoginButton.click();
//点击使用账号密码登入
var usePassword = id("login_mode_switcher").findOne();
usePassword.click();
//填入用户名
var userName =id("phone_et").findOne();
var userNameInfo = "13943110476";
userName.setText(userNameInfo);

//填入密码
//点击了密码框在屏幕上的位置，未来可能需要改动
var password =id("user_phone_num_info").findOne()
var determineClickPassword = click(58,386)
console.log(determineClickPassword)
var passwordInfo = "199910021"
Text(passwordInfo)

//登入
var confirmBtn = id("confirm_btn").findOne()
confirmBtn.click();
// var passwordInfo = 199910021
// setClip(passwordInfo)
// password.paste();
// password.setText(passwordInfo);