import ReactDOMServer from 'react-dom/server'
import {StaticContext} from "react-router"
import { StaticRouter } from 'react-router-dom'
import { App } from './App'

export function render(url: string, context: StaticContext) {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url} context={context}>
      <App />
    </StaticRouter>
  )
}
