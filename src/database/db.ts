import mongoose from "mongoose";
import * as dotenv from 'dotenv';

dotenv.config();

mongoose.connect(
  `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@devasolutions-commerce.cghznpr.mongodb.net/devasolutions-commerce?retryWrites=true&w=majority`
)

export default mongoose;
