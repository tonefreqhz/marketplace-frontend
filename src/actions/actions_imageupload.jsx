import 'whatwg-fetch';
export const PUT_IMAGE = 'PUT_IMAGE';

export function loadImageUpload(results) {
    return {
      type: PUT_IMAGE,
      payload: results,
    };
  }
  
  
  export function postImage(imageDetail, collectionId) {
  return dispatch => fetch(`${process.env.REACT_APP_PROD_API_URL}/api/v1/image/${collectionId}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(imageDetail)
    })
      .then(response => response.json())
      .then((json) => {
        dispatch(loadImageUpload(json));
      })
      .catch(error => console.log(error));
  }
  