//找到消息数量
// let messageNotify = id("notify").find()
// var messageNumber = messageNotify.get(0).text()
//进入该联系人页面
let click =id("notify").findOne().parent().click()
sleep(1000)
//找到所有消息然后倒叙
console.show()
var allMessage = id("message").find()
// for(i = 0;i<allMessage.size();i++){
//   console.log(allMessage.get(i).text())
// }
var allMessageNum = allMessage.size()
console.log(allMessage.get(allMessageNum-1).text())