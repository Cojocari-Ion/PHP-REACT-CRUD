import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { openDeleteModal, openEditModal } from "../store/modals/actions";

function createData(id, email, name, phone, age) {
  return { id, email, name, phone, age };
}

const rows = [
  createData(1, "test@gmail.com", "Ion", 2353453356, 25),
  createData(2, "test@gmail.com", "Ion", 2353453356, 25),
  createData(3, "test@gmail.com", "Ion", 2353453356, 25),
  createData(4, "test@gmail.com", "Ion", 2353453356, 25),
];

export default function UsersTable() {
  const dispatch = useDispatch();

  const open = useSelector((state) => state.modals.openDelete);
  return (
    <div style={{ margin: "0 auto", maxWidth: "1200px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">
                  <Button
                    style={{ marginRight: "10px" }}
                    variant="contained"
                    color="success"
                    onClick={() => {
                      dispatch(openEditModal(true));
                      console.log(open);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => {
                      dispatch(openDeleteModal(true));
                      console.log(open);
                    }}
                    variant="outlined"
                    color="error"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
