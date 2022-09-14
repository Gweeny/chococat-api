import mongoose from "mongoose";

const DataSchema = mongoose.Schema({
  chocolateName: {
    required: true,
    type: String,
  },
  picture: {
    required: true,
    type: String,
  },
});

export default mongoose.model("chocolate", DataSchema, "chocolate");
