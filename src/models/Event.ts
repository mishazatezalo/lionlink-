import mongoose, { Document, Schema } from 'mongoose';

export interface IEvent extends Document {
  title: string;
  description: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema: Schema = new Schema({
  title: { type: String, required: true, index: true },
  description: { type: String, required: true },
  date: { type: Date, required: true, index: true },
}, { timestamps: true });

// Create a compound index for optimized querying
EventSchema.index({ date: 1, title: 1 });

export default mongoose.model<IEvent>('Event', EventSchema);

