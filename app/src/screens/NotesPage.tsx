import * as React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import data from "../mocks/data";

import List from "../components/List";
import AddNoteButton from "../components/AddNoteButton";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Button from "../components/Button";

Modal.setAppElement("#root");

const Wrapper = styled.div`
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

const EditNotePage: React.FC = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  function handleOpenModal() {
    setTitle("");
    setBody("");
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  function handleTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function handleBody(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setBody(event.target.value);
  }

  function handleItemClick(title: string, body: string) {
    setModalOpen(true);
    setTitle(title);
    setBody(body);
  }

  return (
    <Wrapper>
      <List items={data} onClickItem={handleItemClick} />
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
              <Button className="add-button" onClick={handleCloseModal}>
                Add
              </Button>
            </div>
          </div>
          <Input placeholder="Title" value={title} onChange={handleTitle} />
          <TextArea placeholder="Body" value={body} onChange={handleBody} />
        </NoteForm>
      </Modal>
    </Wrapper>
  );
};

export default EditNotePage;
