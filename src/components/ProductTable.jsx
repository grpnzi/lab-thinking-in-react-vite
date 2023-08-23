// src/components/ProductsTable.jsx

import { useState } from "react";
import ProductRow from "./ProductRow";

function ProductsTable(props) {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {props.productsData.map((product) => (
                        <ProductRow key={product.id} product={product} />
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default ProductsTable;