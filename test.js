// var imagePosition = id('image').findOne().bounds()
// var clickImage = click(imagePosition.centerX(),imagePosition.centerY())
// sleep(500);
// press(1080/2,1920/2,1000)
// text('保存').findOne().parent().click()
// click(1080/2,1920/2)

//如果有版本升级的弹窗则自动关闭
if(text("立即升级").findOne(2000)){
  id("iv_close").findOne().click()
}