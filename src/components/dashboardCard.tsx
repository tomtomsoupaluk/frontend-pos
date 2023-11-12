import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type Props = {
  title: string;
  amount: string;
  color: string;
};

export default function BasicCard(props: Props) {
  return (
    <Card sx={{ width: 275, m: 2 }}>
      <CardContent>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="h5" component="div" color={props.color}>
          {props.amount}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">More</Button>
      </CardActions>
    </Card>
  );
}
