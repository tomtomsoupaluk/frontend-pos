import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import SuccessImg from "@/assets/images/success.png";
import ErrorImg from "@/assets/images/error.png";

type Props = {
  success: boolean;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  errorMessages?: string;
};

export default function MaxWidthDialog(props: Props) {
  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog fullWidth maxWidth={"sm"} open={props.open} onClose={handleClose}>
        <DialogContent
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={props.success ? SuccessImg : ErrorImg}
            alt="success"
            width={"150px"}
          />
          <br />
          <DialogContentText variant="h6" textAlign={"center"}>
            {props.success
              ? "Your request has been successfully processed."
              : props.errorMessages}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
