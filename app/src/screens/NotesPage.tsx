import * as React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import data from "../mocks/data";

import List from "../components/List";
import AddNoteButton from "../components/AddNoteButton";
import Input from "../components/Input";
import TextArea from "../components/TextArea";

Modal.setAppElement("#root");

const Wrapper = styled.div`
  .addButton {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
`;

const modalStyles: Modal.Styles = {
  content: {
    display: "flex",
    flexDirection: "column",
  },
};

const EditNotePage: React.FC = () => {
  const [modalOpen, setModalOpen] = React.useState(false);

  function handleOpenModal() {
    setModalOpen(true);
  }

  return (
    <Wrapper>
      <List items={data} />
      <AddNoteButton className="addButton" onClick={handleOpenModal} />
      <Modal
        isOpen={modalOpen}
        closeTimeoutMS={200}
        onRequestClose={() => setModalOpen(false)}
        style={modalStyles}
      >
        <h1>Add a new note</h1>
        <Input />
        <TextArea />
      </Modal>
    </Wrapper>
  );
};

export default EditNotePage;
