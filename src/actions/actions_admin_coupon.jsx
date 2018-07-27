//@desc the discount coupon action used by redux on admin marketplace
//@author Sylvia Onwukwe
import 'whatwg-fetch';
export const FETCH_COUPONS = "FETCH_COUPONS";
export const DELETE_COUPON = "DELETE_COUPON";


export function loadCoupons(result){
  return {
    type: FETCH_COUPONS,
    payload: result
  }
}

export function fetchCoupons(){
  return dispatch => fetch(`${process.env.REACT_APP_API_URL_CALL}/api/v1/coupons`,
 { method: 'GET'})
 .then(response => response.json())
 .then(json => {
   dispatch(loadCoupons(json));
 })
 .catch(error => console.log(error))

}

export function loadDeleteCoupon(results){
  return {
    type: DELETE_COUPON,
    payload: results,
  };
}

export function deleteCoupon(couponID) {
  console.log(couponID);
  return dispatch => fetch(`${process.env.REACT_APP_API_URL_CALL}/api/v1/coupons/${couponID}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
    .then(response => response.json())
    .then((json) => {
      dispatch(loadDeleteCoupon(json));
    })
    .catch(error => console.log(error));
}




