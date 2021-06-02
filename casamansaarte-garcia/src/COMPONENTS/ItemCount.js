import {useState} from "react";

const ItemCount = ( {stock, initial}) => {
    const [stockReq, setStockReq] = useState (initial);
    const [error, setError] = useState ("");

    const onAdd = () => {
if (stock >= stockReq + 1) {
    setStockReq (stockReq + 1);
    setError ("");
}
else {
setError ("Fuishhh! Este producto se fue volando! Pronto repondremos el stock");
}
    };

    return (
        <div className = "ShowContador">
   
    <div onClick = {onAdd}>{stockReq}
    <p>{error}</p>
    </div>

<div className = "Botones">
<button onClick = { () => setStockReq (stockReq -1)}>Restar una unidad de este artículo</button>
Estás llevando la siguiente cantidad de productos: {stockReq}
<button onClick = { () => setStockReq (stockReq +1)}>Sumar una unidad de este artículo</button>
</div>

</div>

    );
};

export default ItemCount;
