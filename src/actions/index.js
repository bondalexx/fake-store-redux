import {productsFetching,productsFetched,productsFetchingError} from '../components/productList/prodcutsSlice'

export const fetchProducts = (request) => (dispatch) => {
    dispatch(productsFetching());
    request("https://fakestoreapi.com/products")
        .then(data => dispatch(productsFetched(data)))
        .catch(() => dispatch(productsFetchingError()))
}

