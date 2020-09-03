
var imagePosition = id('image').findOne().bounds()
var clickImage = click(imagePosition.centerX(),imagePosition.centerY())
sleep(500);
press(1080/2,1920/2,1000)
text('保存').findOne().parent().click()
click(1080/2,1920/2)

