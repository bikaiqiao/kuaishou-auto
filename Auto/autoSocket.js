importClass('java.io.BufferedReader');
importClass('java.io.IOException');
importClass('java.io.InputStream');
importClass('java.io.InputStreamReader');
importClass('java.io.OutputStream');
importClass('java.io.PrintWriter');
importClass('java.net.Socket');
importClass('java.net.ServerSocket');
module.exports = function socket(receiveMessage){
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
    printWriter.print(receiveMessage);
    printWriter.flush();
    //启动后会一直等待客户端连接
    while (true) {
        temp = bufferedReader.readLine();
        log(temp)
        // temp = bufferedReader.read();
        if (temp != null) {
            info += temp;
            log(info);
            // break;
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
}