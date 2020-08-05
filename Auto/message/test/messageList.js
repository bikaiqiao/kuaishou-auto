var contacts = id("name").find()

for(let i = 0;i<contacts.size();i++){
  if(contacts.get(i).text() == "纠结26"){
    contacts.get(0).parent().click()
  }
}
