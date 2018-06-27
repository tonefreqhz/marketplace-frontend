import 'whatwg-fetch';
export const INFO_FETCHED = 'INFO_FETCHED';
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
