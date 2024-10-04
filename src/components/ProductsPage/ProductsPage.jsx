import { products_request } from "../../data";
import Product from "../Product/Product";
import { useEffect, useState } from "react";

export default function ProductsPage(){
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProds = async () => {
            setLoading(true)
            const res = products_request;
            setProducts(res);
            setLoading(false)
        }
        
        getProds();
    }, [])


    let page = products.map(function(item){
        if(loading){
            return <h2>Loading...</h2>
        }
        return <Product info={item}></Product>;
    });
    return page;
}