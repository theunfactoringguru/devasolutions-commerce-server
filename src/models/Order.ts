import mongoose from '../database/db';
import { Types } from 'mongoose';

const Order = new mongoose.Schema({
  orderId: {type: String, required: true, default: ''},
  totalPrice: {type: Number, required: true, default: ''},
  developer: {type: Types.ObjectId, ref: 'Developer'},
  orderType: {type: String, required: true, default: 'desarrollo'},
  application: {type: Types.ObjectId, ref: 'Application'},
  meetingDate: {type: Date, default: new Date()},
  deliveryDate: {type: Date, default: new Date()},
  description: {type: String, default: 'something'},
});

export default mongoose.model('Order', Order);