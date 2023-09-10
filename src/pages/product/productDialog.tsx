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
  handleChange: (e: any) => void;
  handleClick: () => void;
  buttonText: string;
  data: any;
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
          name="barcode"
          label="Barcode"
          type="text"
          fullWidth
          value={props.data.barcode || ""}
          onChange={props.handleChange}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="name"
          label="Name"
          type="text"
          fullWidth
          value={props.data.name || ""}
          onChange={props.handleChange}
        />
        <TextField
          autoFocus
          margin="dense"
          id="qty"
          name="qty"
          label="Qty"
          type="number"
          fullWidth
          value={props.data.qty || ""}
          onChange={props.handleChange}
        />
        <TextField
          autoFocus
          margin="dense"
          id="price"
          name="price"
          label="Price"
          type="number"
          fullWidth
          value={props.data.price || ""}
          onChange={props.handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary" onClick={props.handleClick}>
          {props.buttonText}
        </Button>
        <Button variant="contained" color="secondary" onClick={props.onClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
