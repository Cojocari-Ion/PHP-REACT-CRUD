import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { openEditModal } from "../../store/modals/actions";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

const EditModal = () => {
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    phone: "",
    age: "",
  });

  const open = useSelector((state) => state.modals.openEdit);
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
      <IconButton
        onClick={() => {
          dispatch(openEditModal(false));
        }}
        color="primary"
        aria-label="upload picture"
        component="label"
      >
        <img src="/svg/close.svg" alt="close" />
      </IconButton>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={handleChange}
          name="email"
          id="email"
          label="Email"
          variant="standard"
        />
        <TextField
          name="name"
          onChange={handleChange}
          id="name"
          label="Name"
          variant="standard"
        />
        <TextField
          onChange={handleChange}
          name="phone"
          id="phone"
          label="Phone"
          variant="standard"
        />
        <TextField
          onChange={handleChange}
          name="age"
          id="age"
          label="Age"
          variant="standard"
        />
      </Box>
    </Modal>
  );
};

export default EditModal;
