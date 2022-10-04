import { combineReducers } from 'redux' //combines all the reducers. This combines all the "cases" in the particular reducer function and gives it a collective name.
import { allProductsReducer} from './productReducer';  //importing the functions in the "allProductsReducer" folder

const reducers = combineReducers({
    allProducts: allProductsReducer,  //combining all the "cases" in the "allProductsReducer" function i made and setting its collective name as "allProducts". Now store.js can have access to it since i put this "const reducers" as an argument there.
    
})

export default reducers;