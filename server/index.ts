import dotenv from "dotenv";
import express, { Response, Request } from "express";
import mongoose from "mongoose";
import cors from "cors";
import Note from "./data/Note";

dotenv.config();

const dbUri: string = process.env.MONGODB || "";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/test", (req: Request, res: Response) => {
  res.status(200).json({
    ok: true,
    message: "Metodo de prueba funcionando correctamente :D",
  });
});

app.post("/api/note", async (req: Request, res: Response) => {
  try {
    const { title, body } = req.body;

    const newNote = new Note({ title, body });
    const savedNote = await newNote.save();

    if (savedNote) {
      return res.status(200).json({
        message: "Note created!",
        noteInfo: savedNote,
      });
    } else {
      return res
        .status(400)
        .json({ message: "There was a problem creating the new note" });
    }
  } catch (err) {
    return res
      .status(400)
      .json({ message: "There was a problem creating the new note" });
  }
});

app.get("/api/notes", async (req: Request, res: Response) => {
  try {
    const notes = await Note.find();

    return res.json({
      notes,
    });
  } catch (err) {
    return res
      .status(400)
      .json({ message: "There was an error fetching the notes" });
  }
});

app.get("/api/note", async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    const note = await Note.findById(id);

    if (note) {
      return res.json({ note });
    } else {
      return res
        .status(400)
        .json({ message: `There is no note with id: ${id}` });
    }
  } catch (err) {
    return res
      .status(400)
      .json({ message: "There was a problem getting the note" });
  }
});

app.patch("/api/note", async (req: Request, res: Response) => {
  try {
    const { id, title, body } = req.body;

    const updatedNote = await Note.findOneAndUpdate(
      { _id: id },
      { title, body },
      { new: true }
    );

    if (updatedNote) {
      return res.json({
        message: "Note updated successfully",
        noteInfo: updatedNote,
      });
    } else {
      return res
        .status(400)
        .json({ message: "There was an error updating the note" });
    }
  } catch (err) {
    return res
      .status(400)
      .json({ message: "There was an error updating the note" });
  }
});

app.delete("/api/note", async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    const deletedItem = await Note.findOneAndDelete({ _id: id });

    return res.status(201).json({
      message: `Note with id ${id} was deleted successfully`,
      deletedItem,
    });
  } catch (err) {
    return res
      .status(400)
      .json({ message: "There was a problem deleting the note" });
  }
});

async function connect() {
  try {
    mongoose.Promise = global.Promise;
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  } catch (err) {
    console.error("Mongoose error", err);
  }
  app.listen(3001);
  console.log("API listening on localhost:3001");
}

connect();
