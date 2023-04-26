import mongoose from '../database/db';
import { Types } from 'mongoose';

interface IClient {
  clientId: string,
  username: string,
  password: string,
  name: {firstName: string, lastName: string},
  applications: Types.ObjectId[],
  orders: Types.ObjectId[],
}

const Client = new mongoose.Schema<IClient>({
  clientId: {type: String, required: true, unique: true},
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  name: {firstName: {type: String, required: true}, lastName: {type: String, required: true}},
  applications: [{type: Types.ObjectId, ref: 'Application'}],
  orders: [{types: Types.ObjectId, ref: 'Order'}]
})

export default mongoose.model('Client', Client);