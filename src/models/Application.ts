import mongoose from '../database/db';
import { Types } from 'mongoose';

const Application = new mongoose.Schema({
  applicationId: {type: String, required: true, default: ''},
  name: {type: String, required: true, default: ''},
  order: {type: Types.ObjectId, ref: 'Order'},
  status: {type: String, default: 'En Reunion'},
  services: [{type: Types.ObjectId, ref: 'Service'}],
  description: {type: String, required: true},
})

export default mongoose.model('Application', Application);