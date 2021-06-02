import React, {useEffect, useState} from "react";
import ItemDetail from "./COMPONENTS/ItemDetail";


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)

    useEffect(() => {
        const getITems = new Promise ((resolve) => {
            setTimeout(() => {
                resolve (
                    id: "",
                    price: "",
                    title: "",
                    description: "",
                    image: "",
                })
            }, 2000)
        })

        getItems.then((Result) => {
            setItem(Result)
        })
    })

    return (
    <ItemDetail item={item}></ItemDetail> ) }


export default ItemDetailContainer;