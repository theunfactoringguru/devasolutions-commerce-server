import mongoose from "../database/db";

import { Types } from "mongoose";

const Service = new mongoose.Schema({
  name: {type: String},
  specs: {type: Types.Map, required: true}
})

export default mongoose.model('Service', Service);