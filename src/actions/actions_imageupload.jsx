import 'whatwg-fetch';
export const POST_IMAGE = 'POST_IMAGE';

export function loadImageUpload(results) {
    return {
      type: POST_IMAGE,
      payload: results,
    };
  }
  
  
  export function postImage(imageDetail, collectionId) {
    return dispatch => fetch(`${process.env.REACT_APP_API_URL_CALL}/api/v1/image/${collectionId}`, {
      method: 'POST',
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
  