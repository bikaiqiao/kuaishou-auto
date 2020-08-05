// 基于koa-websocket实现的即时通讯
const Koa = require('koa')
// 路由
const route = require('koa-route')
// koa封装的websocket（官网:https://www.npmjs.com/package/koa-websocket）
const websockify = require('koa-websocket')
const app = websockify(new Koa());
let ctxs = [];
app.ws.use(function (ctx, next) {
  ctxs.push(ctx);
  return next(ctx)
})
app.ws.use(route.all('/', function (ctx) {
  ctx.websocket.on('message', function (message) {
    // 返回给前端的数据
    if(message.length){
      if(message.length<100){
        console.log("服务端接收到字符串=" + message)
      }else{
        console.log("服务端接收到字符串长度=" + message.length)
      }
    }else{
      console.log("服务端接收到" + message)
    }

    for (let i = 0; i < ctxs.length; i++) {
      if (ctx == ctxs[i]) continue;
      ctxs[i].websocket.send(message);
    }
    // ctx.websocket.send(message)
  })
}))
app.listen(3000)
// 会默认打开127.0.0.1:3000这个端口号
console.log("服务启动")

