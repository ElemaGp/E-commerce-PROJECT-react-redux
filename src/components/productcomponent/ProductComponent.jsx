import "./productComponent.css"
import { useSelector } from "react-redux";



const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products); //i can access the "products" object in any component in this project as long as i add this line, thanks to the redux i created. i wrote "state.allProducts.product" because in the fetched data (you can check your redux devtool), the "product" is inside the "allProducts". (Remember that "allProducts" is the collective name i gave it in the combined reducer (index.js), while "product" is the name in the productReducer which contains the payload). So here, by writing state.allproducts.product, i'm accessing the array of products. 
    const renderList = 

    <div className="products">
        {
    products.map((product) => { //since i've fetched the "products" from the "fetchProduct" redux action api which is connected to the productReducer and store (i did the fetching by dispatching the action containing the api call in the "productListing" component), i"ve now used the useSelector above to bring the "products" state into this component. Now i can map through the "products" and use the data as i wish. 
      const {id, title, image, price, category} = product;  //destructuring the properties of each product being mapped, so that i can use "id", "title", "image" etc below (as opposed to "product.id", "product.title" etc).
        return (
           
            
                <div className="product" key={id} >
                    <img src={image} alt="" />
                      <div className="itemInfo">
                        <div className="productTitle">{title}</div>
                        <div className="productPrice">${price}</div>
                        <div className="productCategory">{category}</div>
                      </div>
                </div>


        )
    })
  }
    </div>
    return <>{renderList}</>; //here is the jsx which "returns" the renderList variable above, which is the function that will be displayed on the browser
};

export default ProductComponent;
                        
                    
                    
                        
                    
                    