

var clickRightBtn = id("right_btn").findOne().click()

var clickSendMessage = text("发私信").findOne().parent().click()
sleep(2000)
var textSearch = text("搜索").findOne().setText("纠结26")
console.log(textSearch)

var findName = id("name").find()

console.log(findName)
findName.get(0).parent().click()