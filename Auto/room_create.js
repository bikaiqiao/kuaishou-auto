//创建群


var room_type = "兴趣爱好"
var room_name = "测试用群"
var room_info = "这是本群的介绍，这是一个测试消息"

desc("更多").id("right_btn").findOne().click()
text("创建群聊").findOne().parent().click()
text("开始创建").findOne(2000).click()
text(room_type).findOne(3000).parent().click()
//设置群名称，地点，并提交
id("group_name").findOne().setText(room_name)
text("群地点").findOne().parent().click()
text("不显示地理位置").findOne().parent().click()
text("群介绍").findOne().parent().click()
id("input").findOne().setText(room_info)
sleep(1000)
text("完成").findOne().click()

//设置群头像
text("添加群头像").findOne().parent().click()
text("从相册选取").findOne().parent().click()
sleep(1000)
click(0,361)
sleep(1000)
id("right_btn").findOne().click()
sleep(10000)
text("提交").findOne().click()