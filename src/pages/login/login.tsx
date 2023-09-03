import { Box, Typography, TextField, Button } from "@mui/material";
import styles from "../../styles/login/loginStyles";

type Props = {};

export default function Login({}: Props) {
  return (
    <Box sx={styles.root}>
      <Typography variant="h4">Login</Typography>
      <form style={styles.form}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={styles.button}
        >
          Login
        </Button>
      </form>
    </Box>
  );
}
