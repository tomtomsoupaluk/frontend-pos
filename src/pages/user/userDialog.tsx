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

export default function userDialog(props: Props) {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="username"
          label="Username"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="age"
          label="Age"
          type="number"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="address"
          label="Address"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary">
          Create
        </Button>
        <Button variant="contained" color="error" onClick={props.onClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}
