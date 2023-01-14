const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
	{
		firstname: {
			type: String,
			required: true,
		},
		lastname: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			min: 8,
		},
		phone: {
			type: Number,
		},
	},
	{ timestamps: true }
);

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
