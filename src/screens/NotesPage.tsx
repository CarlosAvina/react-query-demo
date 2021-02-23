import * as React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { useQuery, useMutation } from "react-query";

import List from "../components/List";
import AddNoteButton from "../components/AddNoteButton";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import Loader from "../components/Loader";

import { getNotes, createNote } from "../api/notes";

Modal.setAppElement("#root");

const Wrapper = styled.div`
  align-self: center;
  .new-note {
    position: fixed;
    right: 20px;
    bottom: 20px;
  }
`;

const NoteForm = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .buttons {
    display: flex;
    align-items: center;
  }

  .add-button {
    background-color: #2cb67d;
  }
  .cancel-button {
    background-color: lightgray;
    color: black;
    margin-right: 10px;
  }

  input {
    margin-bottom: 10px;
  }
`;

interface IListNotes {
  _id: string;
  title: string;
  body: string;
}

const EditNotePage: React.FC = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [note, setNote] = React.useState({ id: "", title: "", body: "" });

  const { data, isLoading, error, refetch } = useQuery<IListNotes[], Error>(
    "notes",
    getNotes
  );
  const createNoteMutation = useMutation(
    (value: { title: string; body: string }) =>
      createNote(value.title, value.body)
  );

  function handleOpenModal() {
    setNote({ id: "", title: "", body: "" });
    setModalOpen(true);
  }

  function handleTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setNote((prevNote) => ({ ...prevNote, title: event.target.value }));
  }

  function handleBody(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setNote((prevNote) => ({ ...prevNote, body: event.target.value }));
  }

  function handleItemClick(id: string, title: string, body: string) {
    setModalOpen(true);
    setNote({ id, title, body });
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  function handleSaveNote() {
    const { title, body } = note;

    createNoteMutation.mutate({ title, body });

    setModalOpen(false);
  }

  return (
    <Wrapper>
      {createNoteMutation.isLoading && <h1>Loading...</h1>}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <div>
          <h1>{error.message}</h1>
          <button type="button" onClick={() => refetch()}>
            Retry
          </button>
        </div>
      ) : (
        <List items={data} onClickItem={handleItemClick} />
      )}
      <AddNoteButton className="new-note" onClick={handleOpenModal} />
      <Modal
        isOpen={modalOpen}
        closeTimeoutMS={200}
        onRequestClose={handleCloseModal}
      >
        <NoteForm>
          <div className="header">
            <h1>Add a new note</h1>
            <div className="buttons">
              <Button className="cancel-button" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button className="add-button" onClick={handleSaveNote}>
                Add
              </Button>
            </div>
          </div>
          <Input
            placeholder="Title"
            value={note.title}
            onChange={handleTitle}
          />
          <TextArea
            placeholder="Body"
            value={note.body}
            onChange={handleBody}
          />
        </NoteForm>
      </Modal>
    </Wrapper>
  );
};

export default EditNotePage;
