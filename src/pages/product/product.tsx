import { Button, Container, Typography } from "@mui/material";
import ProductTable from "./productTable";
import CreateProductDialog from "./productDialog";
import EditProductDialog from "./productDialog";
import { useEffect, useState } from "react";
import productService from "../../services/productService";

type Props = {};

export default function product({}: Props) {
  const [productList, setProductList] = useState<any[]>([]);
  const [openCreateProdDiag, setOpenCreateProdDiag] = useState<boolean>(false);
  const [openEditProdDiag, setopenEditProdDiag] = useState<boolean>(false);
  const [productData, setProductData] = useState<any>({});
  const [editProductId, setEditProductId] = useState<string>("");

  useEffect(() => {
    try {
      const getProducts = async () => {
        const products = await productService.getProducts();

        if (products.status === 200) {
          setProductList(products.data);
        } else {
          console.log(products);
        }
      };

      getProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleCreateProduct = async () => {
    try {
      const product = await productService.createProduct(productData);

      if (product.status === 200) {
        let newProductList = [...productList];
        newProductList.push(product.data);
        setProductList(newProductList);
        setProductData({});
        setOpenCreateProdDiag(false);
      } else {
        console.log(product);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditProduct = async () => {
    try {
      const product = await productService.updateProduct(
        editProductId,
        productData
      );

      if (product.status === 200) {
        let newProductList = [...productList];
        let index = newProductList.findIndex(
          (product) => product._id === editProductId
        );
        newProductList[index] = product.data;
        setProductList(newProductList);
        setProductData({});
        setEditProductId("");
        setopenEditProdDiag(false);
      } else {
        console.log(product);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    try {
      const product = await productService.deleteProduct(id);

      if (product.status === 200) {
        let newProductList = [...productList];
        let index = newProductList.findIndex((product) => product._id === id);

        newProductList.splice(index, 1);
        setProductList(newProductList);
      } else {
        console.log(product);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: any) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleOpenCreateProdDiag = () => {
    setOpenCreateProdDiag(true);
  };

  const handleCloseCreateProdDiag = () => {
    setOpenCreateProdDiag(false);
  };

  const handleOpenEditProdDiag = (id: string, data: any) => {
    setEditProductId(id);
    setProductData(data);
    setopenEditProdDiag(true);
  };

  const handleCloseEditProdDiag = () => {
    setopenEditProdDiag(false);
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h4">Product Management</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenCreateProdDiag}
      >
        Create
      </Button>
      <ProductTable
        onEdit={handleOpenEditProdDiag}
        dataList={productList}
        onDelete={handleDeleteProduct}
      />
      <CreateProductDialog
        open={openCreateProdDiag}
        title="Create Product"
        buttonText="Create"
        onClose={handleCloseCreateProdDiag}
        handleChange={handleChange}
        handleClick={handleCreateProduct}
        data={productData}
      />
      <EditProductDialog
        open={openEditProdDiag}
        title="Edit Product"
        buttonText="Edit"
        onClose={handleCloseEditProdDiag}
        handleChange={handleChange}
        handleClick={handleEditProduct}
        data={productData}
      />
    </Container>
  );
}
