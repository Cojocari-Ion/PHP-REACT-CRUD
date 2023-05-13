import logo from "./logo.svg";
import "./App.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import UsersTable from "./components/UsersTable";
import { useSelector, useDispatch } from "react-redux";
import DeleteModal from "./components/modals/DeleteModal";
import EditModal from "./components/modals/EditModal";

function App() {
  return (
    <div className="App">
      <h1>Users Control</h1>
      <UsersTable />
      <DeleteModal />
      <EditModal />
    </div>
  );
}

export default App;
