//点击最左侧按钮
let click =id("left_btn").findOne().click()
//点击私信进入私信页面
var BtnMessage = id("tab_message").findOne();
var clickBtnMessage = BtnMessage.click();
sleep(5000)
var contacts = className("LinearLayout").find()
if(contacts.empty()){
  console.log("找到啦");
}else{
  console.log("没找到╭(╯^╰)╮");
}
console.log(contacts.get(1))