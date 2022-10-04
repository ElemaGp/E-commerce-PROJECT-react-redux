import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/productActions";
import ProductComponent from "../../components/productcomponent/ProductComponent";
import { useEffect } from "react";


const ProductListing = () => {
    const products = useSelector((state) => state); //i can access the "products" object in any component in this project as long as i add this line, thanks to the redux i created. This line of code means that "const products" will be equal to whatever the state of the fetched item is (remember that after the action + thunk fetch, the reducer returns a state whose value is the payload). So after the fetch, "const product" will have the value of the entire object (ie the collective "allProducts", which inside it contains the "product" whose value is then the actual array of products). So basically we're getting the entire state here.
    const dispatch = useDispatch(); //for dispatching the "fetchProducts" action where the api fetch occurs.

      
      useEffect(() => {  // every time this page is loaded, this useEffect fires up the fetchProducts() action function, where the api fetch occurs.
        dispatch(fetchProducts()); //dispatching the "fetchProducts" action where the api fetch occurs.
      }, []);
    console.log("Products: ", products); //Now that we've fetched the data, "const products" is now the value of the entire object (ie the collective "allProducts", which inside it contains the "product" whose value is then the actual array of products)

    return(
        <div className="productListing">
            <ProductComponent />
        </div>
    );
};

export default ProductListing;