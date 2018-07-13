import 'whatwg-fetch';
export const POST_PRODUCT_CATEGORY_DETAILS = 'POST_PRODUCT_CATEGORY_DETAILS';
export const FETCH_PRODUCT_CATEGORIES = "FETCH_PRODUCT_CATEGORIES";

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
      dispatch(loadProductCategoryDetail(json));
    })
    .catch(error => console.log(error));
}

export function loadProductCategories(result){
  return {
    type: FETCH_PRODUCT_CATEGORIES,
    payload: result
  }
}

export function fetchProductCategories(){
  return dispatch => fetch(`${process.env.REACT_APP_API_URL_CALL}/api/v1/categories`,
 { method: 'GET'})
 .then(response => response.json())
 .then(json => {
   dispatch(loadProductCategories(json));
 })
 .catch(error => console.log(error))

}