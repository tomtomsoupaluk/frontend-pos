import SaleProduct from "./saleProduct";
import SaleDetail from "./saleDetail";
import { useEffect, useState } from "react";
import productService from "../../services/productService";

type Props = {};

export default function sale({}: Props) {
  const [productList, setProductList] = useState([]);
  const [productToSale, setProductToSale] = useState<any[]>([]);
  const [saleData, setSaleData] = useState({});

  useEffect(() => {
    try {
      const getProducts = async () => {
        const products = await productService.getProducts();

        if (products.data.success) {
          setProductList(products.data.data);
        } else {
          console.log(products);
        }
      };

      getProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleAddProductToSale = (
    barcode: string,
    price: number,
    qty: number
  ) => {
    let newArr: any[] = [...productToSale];
    let index = newArr.findIndex((product) => product.barcode === barcode);

    if (index === -1) {
      let qtyToSale = 1;
      let total = price * qtyToSale;
      newArr.push({ barcode, price, qtyToSale, total });
    } else {
      if (newArr[index].qtyToSale === qty) {
        return;
      } else {
        newArr[index].qtyToSale++;
        newArr[index].total = newArr[index].qtyToSale * price;
      }
    }

    setProductToSale(newArr);
  };

  const handleSelectPaymentMethod = (method: string) => {
    setSaleData({ ...saleData, paymentMethod: method });
  };

  const handleCheckout = () => {
    console.log(saleData);
    console.log(productToSale);
  };

  return (
    <div
      style={{
        backgroundColor: "#d3d3d3",
        height: "100vh",
        display: "flex",
      }}
    >
      <div style={{ flex: 3, marginTop: 50 }}>
        <SaleProduct
          productList={productList}
          handleAddProductToSale={handleAddProductToSale}
        />
      </div>

      <div style={{ flex: 1 }}>
        <SaleDetail
          productToSale={productToSale}
          handleSelectPaymentMethod={handleSelectPaymentMethod}
          saleData={saleData}
          handleCheckout={handleCheckout}
        />
      </div>
    </div>
  );
}
