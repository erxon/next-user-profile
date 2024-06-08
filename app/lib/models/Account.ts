import mongoose from "mongoose";
const { Schema } = mongoose;

export interface Accounts extends mongoose.Document {
    userId: String;
    type: String;
    provider: String;
    providerAccountId: String;
    refresh_token: String;
    access_token: String;
    expires_at: Number;
    token_type: String;
    scope: String;
    id_token: String;
    session_state: String;
};

const accountSchema = new Schema<Accounts>({
    userId: String,
    type: String,
    provider: String,
    providerAccountId: String,
    refresh_token: String,
    access_token: String,
    expires_at: Number,
    token_type: String,
    scope: String,
    id_token: String,
    session_state: String
});

export default mongoose.models.Account || mongoose.model<Accounts>("Account", accountSchema);