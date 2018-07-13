/**
 * @description All the actions for the frontend users resides here.
 * @author Mohammed Odunayo
 * @name actions_front
 */

export const SLIDERS = 'SLIDERS';
export const CATEGORIES = 'CATEGORIES';
export const VENDORS = 'VENDORS';
export const BRANDS = 'BRANDS';
export const PRODUCTS = 'PRODUCTS';

export function getProducts() {
  return dispatch => fetch('http://www.json-generator.com/api/json/get/ceTGDOLMbS?indent=2', {method: 'GET'})
    .then(response => response.json())
    .then((json) => {
      dispatch(displayProducts(json));
    })
    .catch(error => console.log(error));
}

export function displayProducts(products) {
  
  return {
    type: PRODUCTS,
    payload: products
  }
}

export function getBrands() {
  return dispatch => fetch('http://www.json-generator.com/api/json/get/cfXRcSJNOW?indent=2', {method: 'GET'})
    .then(response => response.json())
    .then((json) => {
      dispatch(displayBrands(json));
    })
    .catch(error => console.log(error));
}

export function displayBrands(brands) {
  
  return {
    type: BRANDS,
    payload: brands
  }
}

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
