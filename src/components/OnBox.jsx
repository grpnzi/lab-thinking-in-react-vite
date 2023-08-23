import React, { useState } from "react";

function onBox(props) {
    const [isChecked, setIsChecked] = useState(false);

    const handleSelect = (e) => {
        setIsChecked(e.target.checked);
    
        props.filterByCheckbox(e.target.checked);
    };

    return (
        <div>
            <label htmlFor="stock">Search only products in Stock</label>
            <input name="stock" type="checkbox" checked={isChecked} onChange={handleSelect} />
        </div>
    );
}

export default onBox;
