import express from 'express'
import { router } from './routes'
import swaggerUi from 'swagger-ui-express'
import swagerDocs from '../../../swagger.json'

export class App {
  public server: express.Application

  constructor () {
    this.server = express()
    this.middleware()
    this.router()
  }

  private middleware () {
    this.server.use(express.json())
    this.server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagerDocs))
  }

  private router () {
    this.server.use(router)
  }
}
