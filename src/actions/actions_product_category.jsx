import 'whatwg-fetch';
export const POST_PRODUCT_CATEGORY_DETAILS = 'POST_PRODUCT_CATEGORY_DETAILS';

export function loadProductCategoryDetail(results) {
  return {
    type: POST_PRODUCT_CATEGORY_DETAILS,
    payload: results,
  };
}

export function postProductCategoryDetails(productCategoryDetails) {
  return dispatch => fetch(`${process.env.REACT_APP_API_URL_CALL}/api/v1/categories`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(productCategoryDetails)
  })
    .then(response => response.json())
    .then((json) => {
      console.log(json);
      dispatch(loadProductCategoryDetail(json));
    })
    .catch(error => console.log(error));
}