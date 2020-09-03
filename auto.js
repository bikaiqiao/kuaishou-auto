importClass('java.io.BufferedReader');
importClass('java.io.IOException');
importClass('java.io.InputStream');
importClass('java.io.InputStreamReader');
importClass('java.io.OutputStream');
importClass('java.io.PrintWriter');
importClass('java.net.Socket');
importClass('java.net.ServerSocket');

const message2 = require('ClassMessage')
var serversocket = new ServerSocket(3000);
log('服务端已经启动,正在等待客户端连接...');
var socket = serversocket.accept();
var inputStream = socket.getInputStream();
//输入部分
var inputStreamReader = new InputStreamReader(inputStream);
var bufferedReader = new BufferedReader(inputStreamReader);
//输出部分
var outputStream = socket.getOutputStream();
var printWriter = new PrintWriter(outputStream);
var temp = null;
var info = "";
while (true) {
  //如果有新的消息则找到这个消息
  //进入阻塞状态
  log("判断是否有新消息")
  // js对象转化为json
  // const payload = JSON.stringify(data)
  var receiveMessage = message2.noticeMessage();
  log(receiveMessage)
  printWriter.print(receiveMessage);
  printWriter.flush();
  temp = bufferedReader.readLine();
  sleep(1000)
  log("服务端收到消息"+temp)
  // temp = bufferedReader.read();
  if (temp != null) {
    info = temp;
    //发送消息
    message2.sendMessage(info)
    log(info);
    //返回上一级
    id("left_btn").findOne().click()
    //跳出循环结束连接
    //break;
  }
  sleep(200);
}











socket.shutdownOutput(); //关闭输出流
//关闭对应资源
printWriter.close();
outputStream.close();
bufferedReader.close();
inputStream.close();
serversocket.close();