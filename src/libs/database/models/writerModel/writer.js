import { Schema, models, model } from "mongoose";

const WriterSchema = new Schema({
  writerName: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  dateOfDeath: { type: String, required: true },
  authorImg: { type: String, required: true },
  address: { type: String, required: true },
  description: { type: String, required: true },
});

const Writer = models.Writer || model("Writer", WriterSchema);

export default Writer;
