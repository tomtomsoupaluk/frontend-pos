import { Container, Grid, Paper } from "@mui/material";
import ProductCard from "../../components/productCard";

type Props = {
  productList: any[];
  handleAddProductToSale: (
    id: string,
    barcode: string,
    price: number,
    qty: number,
    name: string
  ) => void;
};

const saleProduct = (props: Props) => {
  return (
    <Container maxWidth="lg">
      <Paper sx={{ p: 5 }}>
        <Grid container spacing={2}>
          {props.productList.map((product) => (
            <Grid key={product.barcode} item xs={12} sm={6} md={4} lg={3}>
              <ProductCard
                id={product._id}
                barcode={product.barcode}
                name={product.name}
                qty={product.qty}
                price={product.price}
                handleAddProductToSale={props.handleAddProductToSale}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default saleProduct;
