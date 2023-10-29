import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Img from "../../assets/images/1.jpg";

type Props = {
  barcode: string;
  name: string;
  price: number;
  qtyToSale: number;
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
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
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
        </CardContent>
      </Box>
    </Card>
  );
}
