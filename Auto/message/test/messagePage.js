//点击最左侧按钮
let click =id("left_btn").findOne().click()
//点击私信进入私信页面
var BtnMessage = id("tab_message").findOne();
var clickBtnMessage = BtnMessage.click();
sleep(1000)
//auto.js 4.x版本
/*
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
*/
