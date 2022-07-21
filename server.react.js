// @ts-check
const fs = require('fs')
const path = require('path')
const express = require('express')
const resolve = (p) => path.resolve(__dirname, p)

const manifest = require('./dist/vite-react/client/ssr-manifest.json')

const app = express()

/**
 * @type {import('vite').ViteDevServer}
 */
app.use(require('compression')())
app.use(
  "/assets",
  express.static(path.join(__dirname, "./dist/vite-react/client", "assets"))
);


app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl

    const template = fs.readFileSync(resolve('dist/vite-react/client/index.html'), 'utf-8')
    const render = require('./dist/vite-react/server/entry-server.js').render

    const appHtml = await render(url)

    const html = template
      .replace(`<!--ssr-outlet-->`, appHtml)

    res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
  } catch (e) {
    console.log(e.stack)
    res.status(500).end(e.stack)
  }
})

app.listen(3000, () => {
  console.log('http://localhost:3000')
})
