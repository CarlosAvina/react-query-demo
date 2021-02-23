import mongoose from "mongoose";

interface INote extends mongoose.Document {
  title: string;
  body: string;
}

const NoteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
});

const Note = mongoose.model<INote>("note", NoteSchema);

export default Note;
