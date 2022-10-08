import "./productdetails.css"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import { fetchProduct } from "../../redux/actions/productActions";
import { removeSelectedProduct } from "../../redux/actions/productActions";

const ProductDetail = () => {
    const selectedProduct = useSelector((state) => state.selectedProduct); //using the "useSelector" so i can access the "selectedProduct" object here. I wrote "state.selectedProduct" here because in the combinedReducer indexjs, i wrote "selectedProduct": selectedProductReducer. Which means that "selectedProduct" is the collective name of the value returned by the selectedProductReducer function.
    const {image, title, price, category, description} = selectedProduct; //destructuring the "selectedProduct" object you just declared above so you can use eg "image", "title" instead of "selectedProduct.image", "selectedProduct.title".
    const {productId} = useParams(); //useParams gives the value of the dynamic part of the link that links to this productDetails (eg. `/product/${id}`). In this project, it is the "id". It basically represents the dynamic part of the url which leads here, which is the "1","2","3" etc (basically the id of the products).
    const dispatch = useDispatch(); //dispatching the "fetchProduct" action where the fetch occurs.
    console.log(selectedProduct); 

    

        useEffect(() => {
            if (productId && productId !== "") dispatch(fetchProduct(productId)); //if we have a productId and the productId is not equal to an empty string, this useEffect calls the fetchProduct "action" function where the api fetch occurs.
            return () => {
                dispatch(removeSelectedProduct()); //when we leave the page of the selectedProduct, it means theres no productId so this dispatch action unmounts the selectedProduct. This cleanup function action is useful so that when we go to another selectedProduct, it wouldn't show the previous selectedProduct we viewed for a split-second before showing the one we just clicked on.
              }
        }, [productId]);

    return(
        <div className="productDetails">
            {Object.keys(selectedProduct).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div className="productDetailsItems">
                  <div className="image_container">
                    <img src={image} alt="" />
                  </div>
                    <div className="productDetailsRight">
                        <div className="productDetailsTitle"> {title} </div>
                        <div className="productDetailsPrice"> ${price} </div>
                        <div className="productDetailsCategory"> {category} </div>
                        <div className="productDetailsDescription"> {description} </div>
                    </div>
                </div>
            )}
          
        </div>
    );
};

export default ProductDetail;
                        
                        
                        
