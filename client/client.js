var net = require('net');
var port = 3000;
var host = '192.168.3.100';
//创建socket客户端
var client = new net.Socket();
// client.setEncoding('binary');
//连接到服务端
client.connect(port, host, function () {
  console.log("连接成功")
});
//根据服务器端的数据返回信息
client.on('data', function (data) {
  console.log('from server:' + data);
  messagePayload = JSON.parse(data)
  console.log(messagePayload.content)
  if (messagePayload.content == "ding") {
    client.write("dong\r\n");
  }
  else{
    client.write("\r\n")
  }
});
client.on('error', function (error) {
  //错误出现之后关闭连接
  console.log('error:' + error);
  client.destroy();
});
client.on('close', function () {
  //正常关闭连接
  console.log('Connection closed');
});