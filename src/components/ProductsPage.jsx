// src/components/ProductsPage.jsx

import { useState } from "react";
import jsonData from "./../data.json";
import ProductsTable from "./ProductTable";
import SearchBar from "./SearchBar";
import OnBox from "./OnBox";

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [productsCopy, setProductsCopy] = useState(jsonData);
    const [productsCopyOriginal, setProductsCopyOrginal] = useState(jsonData);
    
    const filterProductList = (str) => {
        let filteredProducts;
        if (str === "" ) {
            filteredProducts = productsCopy;
        } else {
            filteredProducts = productsCopy.filter((product) => {
            return product.name.match(str);
          });
        }
    
        setProducts(filteredProducts);
    };

    const filterByCheckbox = (isChecked) => {
        let filteredProducts;
        filteredProducts = productsCopyOriginal;

        if (isChecked){
            filteredProducts = productsCopyOriginal.filter((product) => {
            return (product.inStock === isChecked);
          });
        }

        setProducts(filteredProducts);
    }

    return (
    <>
    <SearchBar filterProductList={filterProductList}/>
    <OnBox productsData={products} filterByCheckbox={filterByCheckbox}/>
    <ProductsTable productsData={products}/>
    </>
    );
}

export default ProductsPage;