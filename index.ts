import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as fs  from 'fs'
import * as path  from 'path'
import * as serve  from 'koa-static'
import config from './config'

const { port, ip, staticPath } =  config

const app = new Koa()
const router = new Router()

router.get('/*', async (ctx: any) => {
  ctx.response.type = 'html'
  ctx.response.body = fs.createReadStream('./dist/index.html')
})

app.use(serve(  path.join( __dirname, staticPath)))
app.use(router.routes())


app.on('error', err => {
    console.log(err)
})

app.listen(port, ip, () => {
    console.log(`Server running on port ${config.port}`)
})
