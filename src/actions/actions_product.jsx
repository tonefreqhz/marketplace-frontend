import 'whatwg-fetch';
export const POST_PRODUCT_DETAILS = 'POST_PRODUCT_DETAILS';

export function loadProductDetail(results) {
  return {
    type: POST_PRODUCT_DETAILS,
    payload: results,
  };
}

export function postProductDetails(productDetails) {
  return dispatch => fetch(`${process.env.REACT_APP_API_URL}/api/v1/`, {
    method: 'POST',
    body: productDetails
  })
    .then(response => response.json())
    .then((json) => {
      dispatch(loadProductDetail(json));
    })
    .catch(error => console.log(error));
}