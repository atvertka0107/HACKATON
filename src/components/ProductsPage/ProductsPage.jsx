import { products } from "../../data";
import Product from "../Product/Product";

export default function ProductsPage(){
    let page = products.map(function (item){
        return <Product info={item}></Product>;
    });
    return page;
}