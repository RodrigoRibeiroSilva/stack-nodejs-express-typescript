import express from 'express'

import UserController from '../controllers/UserController'

class UserRouter {
    private basePath = UserController.basePath

    public applyRouter (app : express.Application) : void {
      app.get(this.basePath, UserController.findAll)
      app.post(this.basePath, UserController.save)
      app.get(`${this.basePath}/:id`, [UserController.validateId, UserController.findById])
      app.put(`${this.basePath}/:id`, UserController.update)
      app.delete(`${this.basePath}/:id`, UserController.delete)
    }
}

export default new UserRouter()
