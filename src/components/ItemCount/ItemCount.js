import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ initial = 1, stock, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const handleClickRes = () => {
        if (quantity > 1) setQuantity(prev => prev - 1);
    }

    const handleClickAdd = () => {
        if (quantity < stock) setQuantity(prev => prev + 1);
    }

    return (
        <>
            <div className="itemCounter">
                <span>Cantidad: {quantity}</span>
                <button onClick={handleClickRes} className="counts">-</button>
                <button onClick={handleClickAdd} className="counts">+</button>
                <div style={{ marginTop: "5px" }}>
                    <button onClick={() => onAdd(quantity)}>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount