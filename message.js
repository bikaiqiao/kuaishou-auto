//点击最左侧按钮
let click =id("left_btn").findOne().click()
//点击私信进入私信页面
var BtnMessage = id("tab_message").findOne();
var clickBtnMessage = BtnMessage.click();
sleep(1000)
var contacts = id("name_layout").find()
var contactsChild = [];
var selectTextContacts;
for(let i = 0;i<contacts.size();i++){
  contactsChild[i] = contacts.get(i).child(0).child(0)
  if(contactsChild[i].text() == "纠结26"){
    selectTextContacts = contactsChild[i]
  }
}
//联系人名称
console.log(selectTextContacts.text());
//根据联系人名称点击进入私信界面
var selectContactsParent = selectTextContacts.parent().parent().parent()
selectContactsParent.click();
var editor = id("editor").findOne();
editor.setText("hello,world")
var sendBtn = id("send_btn").findOne()
sendBtn.click();
// console.log(contactsText.parent().parent().parent().click())
// console.log(selectContacts)
// var parentSelectContacts = selectContacts.parent()
// parentSelectContacts.click();

// if(contacts.empty()){
//   console.log("找到啦");
// }else{
//   console.log("没找到╭(╯^╰)╮");
// }
// console.log(contacts.get(1))