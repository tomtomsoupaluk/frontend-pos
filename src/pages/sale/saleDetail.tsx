import { useRef } from "react";
import { Button, Container, Divider, Typography } from "@mui/material";
import OrderItem from "./orderItem";
import { Box } from "@mui/system";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import QrCode2Icon from "@mui/icons-material/QrCode2";

import ReactToPrint from "react-to-print";

type Props = {
  productToSale: any[];
  handleSelectPaymentMethod: (method: string) => void;
  saleData: any;
  handleCheckout: () => void;
  handleDeleteProductToSale: (id: string) => void;
};

const paymentMethods = [
  { title: "Cash", value: "cash" },
  { title: "QR Code", value: "qr" },
];

const saleDetail = (props: Props) => {
  const componentRef = useRef(null);
  return (
    <div style={{ backgroundColor: "#fff", height: "100vh" }}>
      <Container maxWidth="lg">
        <Typography variant="h6">Order Detail</Typography>
        <Divider />

        <br />

        <Box
          height={"50vh"}
          overflow={"scroll"}
          padding={1}
          sx={{ backgroundColor: "#d3d3d3" }}
        >
          {props.productToSale.map((product) => (
            <OrderItem
              key={product.barcode}
              id={product._id}
              barcode={product.barcode}
              name={product.name}
              price={product.price}
              qtyToSale={product.qtyToSale}
              handleDeleteProductToSale={props.handleDeleteProductToSale}
            />
          ))}
        </Box>
        <br />
        <Divider />
        <br />
        <Box display={"flex"}>
          <Box flex={1}>
            <Typography variant="body1">Subtotal:</Typography>
            <Typography variant="body1">VAT:</Typography>
            <Typography variant="h6">Total:</Typography>
          </Box>

          <Box
            flex={1}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-end"}
          >
            <Typography variant="body1">
              {props.productToSale.reduce((acc, cur) => acc + cur.total, 0)}
            </Typography>
            <Typography variant="body1">7%</Typography>
            <Typography variant="h6">
              {props.productToSale.reduce((acc, cur) => acc + cur.total, 0)}
            </Typography>
          </Box>
        </Box>

        <Box display={"flex"} flexDirection={"column"} gap={2}>
          {paymentMethods.map((payMethod) => (
            <Box
              border={2}
              borderColor={
                props.saleData.paymentMethod === payMethod.value
                  ? "#008000"
                  : ""
              }
              borderRadius={50}
              height={30}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              p={1}
              sx={{ cursor: "pointer" }}
              key={payMethod.title}
              onClick={() => props.handleSelectPaymentMethod(payMethod.value)}
            >
              <Typography
                variant="body1"
                color={
                  props.saleData.paymentMethod === payMethod.value
                    ? "#008000"
                    : ""
                }
              >
                {payMethod.title}
              </Typography>

              {payMethod.value === "cash" ? (
                <MonetizationOnIcon
                  color={
                    props.saleData.paymentMethod === payMethod.value
                      ? "success"
                      : "inherit"
                  }
                />
              ) : (
                <QrCode2Icon
                  color={
                    props.saleData.paymentMethod === payMethod.value
                      ? "success"
                      : "inherit"
                  }
                />
              )}
            </Box>
          ))}

          <Button variant="contained" fullWidth onClick={props.handleCheckout}>
            Pay
          </Button>

          {/* <ReactToPrint
            trigger={() => (
              <Button variant="contained" fullWidth>
                Pay
              </Button>
            )}
            content={() => componentRef.current}
          />

          <Box ref={componentRef} display={"none"}>
            fdsafd
          </Box> */}
        </Box>
      </Container>
    </div>
  );
};

export default saleDetail;
