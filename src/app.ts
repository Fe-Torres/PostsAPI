/* eslint-disable no-new */
import { App } from './routes/api'
import 'dotenv/config'
import { MongoConnection } from './database/connection'

if (!process.env.PORT) {
  console.log('Error to get env vars')
  process.exit(1)
}

new MongoConnection(process.env.MONGO_URI)
new App().server.listen(process.env.PORT)
