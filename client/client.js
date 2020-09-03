var net = require('net');
var port = 3000;
var host = '192.168.3.36';
//创建socket客户端
var client = new net.Socket();
// client.setEncoding('binary');
//连接到服务端
client.connect(port, host, function () {
  console.log("连接成功")
});
//根据服务器端的数据返回信息
var content = "";
client.on('data', function (data) {
  console.log('from server:' + data);
  try {
    content = content + data
    var messagePayload = JSON.parse(content)
    console.log(messagePayload.content)
  } catch (error) {
    console.log('等待消息发送完');
    return;
  }
  if (messagePayload.content == "ding") {
    client.write("dong\r\n");
  } else if (messagePayload.content.search("data:image")) {
    var base64Data = messagePayload.content.replace(/^data:image\/\w+;base64,/, "");
    let imageBitmap = Buffer.from(base64Data, 'base64'); // 解码图片
    fs.writeFileSync('end.jpg', imageBitmap)
    client.write('收到图片\r\n')
  } else {
    console.log(messagePayload.content)
    client.write("ding Please\r\n")
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