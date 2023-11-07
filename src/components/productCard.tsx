import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Img from "../assets/images/no-image.png";

type Props = {
  id: string;
  barcode: string;
  name: string;
  price: number;
  qty: number;
  handleAddProductToSale: (
    id: string,
    barcode: string,
    price: number,
    qty: number
  ) => void;
};

export default function productCard(props: Props) {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia sx={{ height: 140 }} image={Img} title="water" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.price} LAK
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() =>
            props.handleAddProductToSale(
              props.id,
              props.barcode,
              props.price,
              props.qty
            )
          }
        >
          Add
        </Button>
      </CardActions>
    </Card>
  );
}
