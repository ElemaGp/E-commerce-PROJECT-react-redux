import fakeStoreBaseApiUrl from "../../baseApiUrl/fakeStoreBaseApiUrl.js";
import {ActionTypes} from "../constants/action-types.js"

//So basically in redux, the action functions are also used for making the apiCalls (with thunk middleware to make it async).

//FOR FETCHING ALL PRODUCTS
//thunk middleware below (thunk middleware makes the action's function async. Meaning it holds the action's fetched until all the data is received, and then sends it to "const response". )
export const fetchProducts = () => async (dispatch) => {  //from the redux github repo, the thunk middleware always takes "dispatch" as arguments (and even sometimes, "getState")
    const response = await fakeStoreBaseApiUrl.get("/products"); //this is the api fetch that will be triggered when we dispatch this "fetchProducts" action function in any component. We already declared the base url in the "fakeStoreBaseApiUrl" calls to be "https://fakestoreapi.com" so that is why we can just write "/products" here in the get request.
    dispatch({type: ActionTypes.FETCH_PRODUCTS, payload: response.data}); //dispatching the data you've fetched into the reducer
};