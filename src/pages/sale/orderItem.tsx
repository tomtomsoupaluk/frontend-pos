import Box from "@mui/material/Box";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material/";
import Img from "../../assets/images/no-image.png";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  id: string;
  barcode: string;
  name: string;
  price: number;
  qtyToSale: number;
  handleDeleteProductToSale: (id: string) => void;
};

export default function OderItem(props: Props) {
  return (
    <Card sx={{ display: "flex", margin: 1 }}>
      <CardMedia
        component="img"
        sx={{ width: 100 }}
        image={Img}
        alt="Live from space album cover"
      />
      <CardContent sx={{ display: "flex", width: "100%" }}>
        <Box flex={3}>
          <Typography component="div" variant="body1">
            {props.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Qty: {props.qtyToSale}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {props.price}
          </Typography>
        </Box>
        <Box
          flex={1}
          display={"flex"}
          justifyContent={"flex-end"}
          alignItems={"flex-end"}
        >
          <IconButton onClick={() => props.handleDeleteProductToSale(props.id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
