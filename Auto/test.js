//直接使用message对象里面的方法应该也是可以的
const message1 = require('ClassMessage.js')
//引入socket方法连接客户端和服务器
const socket = require('Socket')
let name = "testBot"
let messageText = "ding"




// message1.goToMessagePage()

// message1.findNameByFollowList(name)

// message1.sendMessage(messageText)

// var test = message1.noticeMessage()
socket("ding")