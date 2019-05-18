import { Controller } from './GenericController'
import { User } from '../model/User'

class UserController extends Controller<User> {
  public constructor () {
    super(User)
  }
}

export default new UserController()
