launchApp("快手");

//点击登入按钮
var searchButton = id("left_text").findOne();
searchButton.click();
//只有在第一次登入安装app的时候才需要这个操作
//点击其他登入方式
// var otherLoginButton = id("other_login_tv").findOne();
// otherLoginButton.click();


// 点击使用账号密码登入
// var usePassword = id("login_mode_switcher").findOne();
// usePassword.click();
//


//填入用户名
var userName =id("phone_et").findOne();
var userNameInfo = "13943110476";
userName.setText(userNameInfo);



//填入密码
//点击了密码框在屏幕上的位置，未来可能需要改动
// 可能由于更新了auto.js，密码的id出现了变化
//
var password =id("password_et").findOne()
var determineClickPassword = click(58,386)
var passwordInfo = "199910021"
Text(passwordInfo)

//登入
// var confirmBtn = id("confirm_btn").findOne()
// confirmBtn.click();

//登入后可能会有插图验证码