import { Button, Container, Typography } from "@mui/material";
import UserTable from "./userTable";
import CreateUserDialog from "./userDialog";
import EditUserDialog from "./userDialog";
import { useState, useEffect } from "react";
import userService from "../../services/userService";

type Props = {};

export default function product({}: Props) {
  const [userList, setUserList] = useState<any[]>([]);
  const [openCreateUserDiag, setOpenCreateUserDiag] = useState<boolean>(false);
  const [openEdituserDiag, setopenEdituserDiag] = useState<boolean>(false);

  useEffect(() => {
    try {
      const getUsers = async () => {
        const users = await userService.getUsers();

        if (users.status === 200) {
          setUserList(users.data);
        }
      };

      getUsers();
    } catch (error) {
      console.log(error);
    }
  }, []);

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
      <UserTable onEdit={handleOpenEditUserDiag} dataList={userList} />
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
