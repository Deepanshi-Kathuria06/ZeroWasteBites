import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, email, password, role, organizationName } = req.body;

  try {
    const existing = await User.findOne({ email });
    if (existing) return res.json({ success: false, message: "Email already in use" });

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      name, email, password: hash, role, organizationName
    });

    res.json({ success: true, message: "User registered" });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.json({ success: false, message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.json({ success: false, message: "Wrong password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
        email: user.email,
      }
    });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};
