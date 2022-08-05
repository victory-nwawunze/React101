/** @format */
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
function Todo(props) {
  // Set State
  const [modalIsOpen, setModalIsOpen] = useState(false);
  //   Open Modal
  function deleteHandler() {
    setModalIsOpen(true);
  }

  //   Close Modal
  function CloseModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {/* Condition rendering */}
      {modalIsOpen && (
        <Modal onCancel={CloseModalHandler} onConfirm={CloseModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={CloseModalHandler} />}
    </div>
  );
}
export default Todo;
