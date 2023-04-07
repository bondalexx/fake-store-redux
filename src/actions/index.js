
export const fetchProducts = (request) => (dispatch) => {
    dispatch(productsFetching());
    request("https://fakestoreapi.com/products")
        .then(data => dispatch(productsFetched(data)))
        .catch(() => dispatch(productsFetchingError()))
}

export const productsFetching = () => {
    return {
        type: 'PRODUCTS_FETCHING'
    }
}

export const productsFetched = (products) => {
    return {
        type: 'PRODUCTS_FETCHED',
        payload: products
    }
}

export const productsFetchingError = () => {
    return {
        type: 'PRODUCTS_FETCHING_ERROR'
    }
}

