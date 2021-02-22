import axios from "axios";

export async function getNotes() {
  const { data } = await axios.get("http://localhost:3000/api/notes");
  return data.notes;
}

export async function getNoteById(id: string) {
  const { data } = await axios.get("http://localhost:3000/api/note", {
    data: { id },
  });
  return data;
}

export async function createNote(title: string, body: string) {
  return axios.post("http://localhost:3000/api/note", {
    title,
    body,
  });
}

export async function updateNoteById(id: string, title: string, body: string) {
  const { data } = await axios.patch("http://localhost:3000/api/note", {
    id,
    title,
    body,
  });
  return data;
}

export async function deleteNoteById(id: string) {
  const { data } = await axios.delete("http://localhost:3000/api/note", {
    data: { id },
  });
  return data;
}
