var net = require('net');
var port = 3000;
var host = '192.168.3.100';
var client = new net.Socket();
//创建socket客户端
// client.setEncoding('binary');
//连接到服务端
client.connect(port, host, function () {
  //向端口写入数据到达服务端
  console.log("连接成功")
});
client.on('data', function (data) {
  console.log('from server:' + data);
  if (data == "ding") {
    client.write("dong\r\n");
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