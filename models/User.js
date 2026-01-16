const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Email invalide"],
  },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
