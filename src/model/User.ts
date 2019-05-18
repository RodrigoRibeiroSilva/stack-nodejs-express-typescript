import { Schema, model, Document } from 'mongoose'

export interface User extends Document {
    email: string,
    firstName: string,
    lastName: string
}

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String
}, {
  timestamps: true
})

export const User = model<User>('User', UserSchema)
