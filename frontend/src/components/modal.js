import { useState } from "react";
import Modal from "react-modal";
import Form from "../components/form";

const customStyles = {
  content: {
    top: "48%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    background:
      "url(https://www.dsnews.ua/static/storage/thumbs/1000x545/9/a4/bae077cf-2f2149e1b839be0f3a28b3eb09281a49.jpg?v=2236_1)",
    height: "70%",
    width: "70%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};
Modal.setAppElement("#modal");
export default function ModalHero() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className="double-border-button" onClick={openModal}>
        Create Hero
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <button
          className="double-border-button"
          onClick={closeModal}
          style={{ background: "black" }}
        >
          close
        </button>
        <Form setIsOpen={setIsOpen} />
      </Modal>
    </div>
  );
}
