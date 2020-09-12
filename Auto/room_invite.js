var name = "testBot"
id("right_btn").findOne().click()
text("邀请").findOne().parent().click()
//下面的步骤接近于MessageClass中的主动发送消息

var textSearch = text("搜索").findOne().setText(name)
var findName = id("name").find()
//搜索出用户以后选择第一个
//
if (findName.get(0).parent()) {
  findName.get(0).parent().click()
}
id("right_btn").findOne().click()