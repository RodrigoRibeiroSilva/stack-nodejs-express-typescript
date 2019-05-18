import { Request, Response, NextFunction } from 'express'
import { Document, Model, Types } from 'mongoose'

export abstract class Controller<E extends Document> {
    protected model: Model<E>
    public basePath: string

    public constructor (model: Model<E>) {
      this.model = model
      this.basePath = `/${model.collection.name}`
    }

    public validateId = (req: Request, res: Response, next: NextFunction) : void => {
      if (!Types.ObjectId.isValid(req.params.id)) {
        next(new Error('Invalid id'))
      } else {
        next()
      }
    }

    public findAll = (req: Request, res: Response, next: NextFunction) : void => {
      this.model.find()
        .then((result) : Response => res.send(result))
        .catch(next)
    }

    public findById = (req: Request, res: Response, next: NextFunction): void => {
      this.model.findById(req.params.id)
        .then((result) : Response => res.send(result))
        .catch(next)
    }

    public save = (req: Request, res: Response, next: NextFunction): void => {
      let document = this.model
      document.create(req.body)
        .then((result) : Response => res.send(result))
        .catch(next)
    }

    public update = (req: Request, res: Response, next: NextFunction) : void => {
      const options = { runValidators: true, new: true }
      this.model.findByIdAndUpdate(req.params.id, req.body, options)
        .then((result) : Response => res.send(result))
        .catch(next)
    }

     public delete = (req: Request, res: Response, next: NextFunction) : void => {
       this.model.deleteOne({ _id: req.params.id }).exec().then((cmdResult) : void => {
         if (cmdResult) {
           res.sendStatus(204)
         } else {
           throw new Error('Document Not Found')
         }
       }).catch(next)
     }
}
