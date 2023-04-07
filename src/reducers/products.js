import { productsFetched,productsFetching,productsFetchingError } from "../actions";

const initialState = {
    products: [],
    productsLoadingStatus: 'idle'
}

const products = (state = initialState, action) => {
    switch (action.type) {
        case 'PRODUCTS_FETCHING':
            return {
                ...state,
                productsLoadingStatus: 'loading'
            }
        case 'PRODUCTS_FETCHED':
            return {
                ...state,
                products: action.payload,
                productsLoadingStatus: 'idle'
            }
            case 'PRODUCTS_FETCHING_ERROR':
            return {
                ...state,
                productsLoadingStatus: 'error'
            }
        default: return state
    }
}

export default products;