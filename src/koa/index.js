const Koa = require('koa')
const router = require('koa-router')()

const app = new Koa()

router.get('/api/getPicList', async (ctx) => {
  ctx.body = {
    data: [
      "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
      "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
      "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
      "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
      "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
      "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
      "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
    ],
    code: 0,
    msg: "成功",
  }
})

//通过修改响应头（CORS）解决跨域问题
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin", "http://logviv.com")
  ctx.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With"
  )
  ctx.set("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS")
  if (ctx.method === "OPTIONS") {
    ctx.body = 200
  } else {
    await next()
  }
})
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3002, () => {
  console.log("连接服务器成功")
})
