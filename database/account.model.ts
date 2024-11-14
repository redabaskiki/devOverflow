import mongoose from "mongoose";
import { model, models, Schema, Types } from "mongoose";
 
export interface IAccount {
  userId: Types.ObjectId;
  name: string;
  image?: string;
  password?: string;
  provider: string;
  providerAccountId: string;
}
const AccountSchema = new Schema<IAccount>({
  userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },

  name: { type: String, required: true }, // String is shorthand for {type: String}
  image: { type: String },
  password: { type: String }, // String is shorthand for {type: String}
  provider: { type: String, required: true },
  providerAccountId: { type: String, required: true },
}  ,{ timestamps: true });
const Account = models?.Account || model<IAccount>("Account", AccountSchema);
export default Account;