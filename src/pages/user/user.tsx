import { Button, Container, Typography } from "@mui/material";
import UserTable from "./userTable";
import CreateUserDialog from "./userDialog";
import EditUserDialog from "./userDialog";
import { useState } from "react";

type Props = {};

export default function product({}: Props) {
  const [openCreateUserDiag, setOpenCreateUserDiag] = useState<boolean>(false);
  const [openEdituserDiag, setopenEdituserDiag] = useState<boolean>(false);

  const handleOpenCreateUserDiag = () => {
    setOpenCreateUserDiag(true);
  };

  const handleCloseCreateUserDiag = () => {
    setOpenCreateUserDiag(false);
  };

  const handleOpenEditUserDiag = () => {
    setopenEdituserDiag(true);
  };

  const handleCloseEdituserDiag = () => {
    setopenEdituserDiag(false);
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h4">User Management</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenCreateUserDiag}
      >
        Create
      </Button>
      <UserTable onEdit={handleOpenEditUserDiag} />
      <CreateUserDialog
        open={openCreateUserDiag}
        title="Create User"
        onClose={handleCloseCreateUserDiag}
      />
      <EditUserDialog
        open={openEdituserDiag}
        title="Edit User"
        onClose={handleCloseEdituserDiag}
      />
    </Container>
  );
}
