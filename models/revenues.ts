import { Schema, model } from "mongoose"

const RevenueSchema = new Schema({
    route: { type: Schema.Types.ObjectId, ref: 'Route', required: true },
    vehicle: { type: Schema.Types.ObjectId, ref: 'Vehicle', required: true },
    start_time: { type: Date, required: true },
    end_time: { type: Date, required: true },
    total_fare: { type: Number, required: true }
  });
  

const RevenueModel = model('Revenue', RevenueSchema);
export default RevenueModel