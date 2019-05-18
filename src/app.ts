import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import UserRouter from './router/UserRouter'

class App {
    public express: express.Application

    public constructor () {
      this.express = express()
      this.config()
      this.routes()
      this.database()
    }
    private routes (): void {
      UserRouter.applyRouter(this.express)
    }

    private database (): void {
      mongoose.connect('mongodb://jetdev:jetdev1@ds123675.mlab.com:23675/jet-uploads', {
        useNewUrlParser: true
      })
    }

    private config (): void {
      this.express.use(express.json())
      this.express.use(cors())
    }
}

export default new App().express
