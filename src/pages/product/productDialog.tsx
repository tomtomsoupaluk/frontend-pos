import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

type Props = {
  open: boolean;
  title: string;
  onClose: () => void;
};

export default function productDialog(props: Props) {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="barcode"
          label="Barcode"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="qty"
          label="Qty"
          type="number"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="price"
          label="Price"
          type="number"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary">
          Create
        </Button>
        <Button variant="contained" color="secondary" onClick={props.onClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
