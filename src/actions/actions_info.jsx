import 'whatwg-fetch';
export const INFO_FETCHED = 'INFO_FETCHED';
export const PRODUCT_FETCHED = 'PRODUCT_FETCHED';
export const NEW_INFO = 'NEW_INFO';


export function loadInfo(results) {
  return {
    type: INFO_FETCHED,
    payload: results,
  };
}

export function fetchInfo() {
  return dispatch => fetch('http://www.json-generator.com/api/json/get/cqJjWyLJua?indent=2', {
    method: 'GET',
  })
    .then(response => response.json())
    .then((json) => {
      dispatch(loadInfo(json));
    })
    .catch(error => console.log(error));
}

export function loadProduct(results) {
  return {
    type: PRODUCT_FETCHED,
    payload: results,
  };
}

export function fetchProduct() {
  return dispatch => fetch('http://www.json-generator.com/api/json/get/cqJjWyLJua?indent=2', {
    method: 'GET',
  })
    .then(response => response.json())
    .then((json) => {
      dispatch(loadProduct(json));
    })
    .catch(error => console.log(error));
}
