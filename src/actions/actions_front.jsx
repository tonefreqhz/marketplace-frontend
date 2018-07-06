import 'whatwg-fetch';
export const SLIDERS = 'SLIDERS';
export const CATEGORIES = 'CATEGORIES';
export const VENDORS = 'VENDORS';

export function getVendors() {
  return dispatch => fetch('http://www.json-generator.com/api/json/get/cknaNltAmW?indent=2', {method: 'GET'})
    .then(response => response.json())
    .then((json) => {
      dispatch(displayVendors(json));
    })
    .catch(error => console.log(error));
}

export function displayVendors(vendors) {
  
  return {
    type: VENDORS,
    payload: vendors
  }
}

export function getCategories() {
  return dispatch => fetch('http://www.json-generator.com/api/json/get/bPWNcDZhAi?indent=2', {method: 'GET'})
    .then(response => response.json())
    .then((json) => {
      dispatch(displayCategories(json));
    })
    .catch(error => console.log(error));
}

export function displayCategories(categories) {
  
  return {
    type: CATEGORIES,
    payload: categories
  }
}

export function getSliders() {
  return dispatch => fetch('http://www.json-generator.com/api/json/get/bPTZPnkOtK?indent=2', {method: 'GET'})
    .then(response => response.json())
    .then((json) => {
      dispatch(displaySliders(json));
    })
    .catch(error => console.log(error));
}

export function displaySliders(sliders) {
  return {
    type: SLIDERS,
    payload: sliders
  }
}
