import "./productComponent.css"
import { useSelector } from "react-redux";



const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products); //i can access the "products" object in any component in this project as long as i add this line, thanks to the redux i created. i wrote "state.allProducts.product" because in the fetched data (you can check your redux devtool), the "product" is inside the "allProducts". (Remember that "allProducts" is the collective name i gave it in the combined reducer (index.js), while "product" is the name in the productReducer which contains the payload). So here, by writing state.allproducts.product, i'm accessing the array of products. 
    const renderList = products.map((product) => { //since i've fetched the "products" from the api in "productListing" component and put the data inside the "SetProduct" redux action which is connected to the productReducer and store, i"ve used the useSelector above to bring the "products" state into this component. Now i can map through the "products" and use the data as i wish. 
      const {id, title, image, price, category} = product;  //destructuring the properties of each product being mapped, so that i can use "id", "title", "image" etc below
        return (
            <div className="four wide column" key={id}>
                
            <div className="ui link cards">
                <div className="card">
                    <div className="image">
                        <img src={image} alt={title} />
                    </div>
                    <div className="content">
                        <div className="header">{title}</div> 
                        <div className="meta price">$ {price}</div>
                        <div className="meta">{category}</div>
                    </div>
                </div>
            </div>
            
        </div>
        );
    });
    
    return <>{renderList}</>; //here is the jsx which "returns" the renderList variable above, which is the function that will be displayed on the browser
};

export default ProductComponent;