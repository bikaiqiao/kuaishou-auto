

//如果有版本升级的弹窗则自动关闭
if(text("立即升级").findOne(2000)){
  id("iv_close").findOne().click()
}
