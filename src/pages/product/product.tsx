import { Button, Container, Typography } from "@mui/material";
import ProductTable from "./productTable";
import CreateProductDialog from "./productDialog";
import EditProductDialog from "./productDialog";
import { useState } from "react";

type Props = {};

export default function product({}: Props) {
  const [openCreateProdDiag, setOpenCreateProdDiag] = useState<boolean>(false);
  const [openEditProdDiag, setopenEditProdDiag] = useState<boolean>(false);

  const handleOpenCreateProdDiag = () => {
    setOpenCreateProdDiag(true);
  };

  const handleCloseCreateProdDiag = () => {
    setOpenCreateProdDiag(false);
  };

  const handleOpenEditProdDiag = () => {
    setopenEditProdDiag(true);
  };

  const handleCloseEditProdDiag = () => {
    setopenEditProdDiag(false);
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h4">Product Management</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenCreateProdDiag}
      >
        Create
      </Button>
      <ProductTable 
        onEdit={handleOpenEditProdDiag}
      />
      <CreateProductDialog
        open={openCreateProdDiag}
        title="Create Product"
        onClose={handleCloseCreateProdDiag}
      />
      <EditProductDialog
        open={openEditProdDiag}
        title="Edit Product"
        onClose={handleCloseEditProdDiag}
      />
    </Container>
  );
}
