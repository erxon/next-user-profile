import mongoose from "mongoose";
const { Schema } = mongoose;

export interface VerificationTokens extends mongoose.Document {
  identified: String;
  token: String;
  expires: Date;
}

const verificationTokenSchema = new Schema<VerificationTokens>({
  identified: String,
  token: String,
  expires: Date,
});

export default mongoose.models.VerificationToken ||
  mongoose.model<VerificationTokens>(
    "VerificationToken",
    verificationTokenSchema
  );
