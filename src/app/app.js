/* eslint-disable import/no-extraneous-dependencies */
import { createBrowserHistory } from 'history'
import dva from 'dva'
import router from './routes'
import registerModels from './registerModels'

const browserHistory = createBrowserHistory()

const app = dva({
    history: browserHistory,
})

registerModels(app)
app.router(router)
app.start('#root')
