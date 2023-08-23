import { useState } from "react";

function ProductsRow(props) {
    const products = props.product
    return (

        <tr key={products.id}>
            {products.inStock ? <td className="inStock">{products.name}</td> : <td className="notInStock">{products.name}</td>}
            <td>{products.price}</td>
        </tr>
    )
}

export default ProductsRow;