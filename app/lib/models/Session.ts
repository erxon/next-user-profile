import mongoose from "mongoose";
const { Schema } = mongoose;

export interface Sessions extends mongoose.Document {
  userId: String;
  sessionToken: String;
  expires: Date;
}

const sessionSchema = new Schema<Sessions>({
  userId: String,
  sessionToken: String,
  expires: Date,
});

export default mongoose.models.Session ||
  mongoose.model<Sessions>("Session", sessionSchema);
