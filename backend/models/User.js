import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["NGO", "RESTAURANT"], required: true },
  organizationName: { type: String },
}, { timestamps: true });

export default mongoose.model("User", userSchema);
