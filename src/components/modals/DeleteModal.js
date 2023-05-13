import React from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { openDeleteModal } from "../../store/modals/actions";

const DeleteModal = () => {
  const open = useSelector((state) => state.modals.openDelete);
  const dispatch = useDispatch();

  const customStyles = {
    content: {
      width: "400px",
      margin: "0  auto",
      maxHeight: "300px",
    },
  };

  return (
    <Modal style={customStyles} isOpen={open}>
      <button
        onClick={() => {
          dispatch(openDeleteModal(false));
        }}
      >
        close
      </button>
      <div>Do you realy want to delete user...</div>
    </Modal>
  );
};

export default DeleteModal;
