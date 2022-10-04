import { ActionTypes } from "../constants/action-types";

//creating initial state
const initialState = {
    products: [],
};

//creating the Reducer "case" for each of the action's type 
export const allProductsReducer = (state = initialState, {type, payload}) => { //i took the "state" as an argument and made it equal to the initial state which is an empty array. Then i destructured the "action" to get the "type" and "payload" from the "setProducts" action.
    switch (type) {
        // case ActionTypes.SET_PRODUCTS:
        //     return {...state, products: payload}; //if the actiontype case is SET_PRODUCTS, then this allProductsReducer fuction will return the new value that is fetched from the action that has that "type" as the state which will be displayed in the key: value form "products: payload (payload means the fetched data)" 
        case ActionTypes.FETCH_PRODUCTS:
            return {...state, products: payload}; //if the actiontype case is FETCH_PRODUCTS, then this allProductsReducer fuction will return the new value that is fetched from the action that has that "type" as the state which will be displayed in the key: value form "products: payload (payload means the fetched data)" 
    
        default:
            return state;
    }
};