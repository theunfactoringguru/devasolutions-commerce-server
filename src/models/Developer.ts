import mongoose from '../database/db';
import { Types } from 'mongoose';

const Developer = new mongoose.Schema({
  developerId : {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true, unique: true},
  name: {firstName: {type: String, required: true}, lastName: {type: String, required: true}},
  orders: [{type: Types.ObjectId, ref: 'Order'}],
});

export default mongoose.model('Developer', Developer);