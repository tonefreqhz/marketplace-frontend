/**
 * @description The Users Access Control Component.
 * @author Mohammed Odunayo
 * @name AccessControl
 */

export const userIs = users => {
    const LS_KEY = "bezop-login:";
    const auth = {
        customer: JSON.parse(localStorage.getItem(`${LS_KEY}customer`)),
        vendor: JSON.parse(localStorage.getItem(`${LS_KEY}vendor`)),
        admin: JSON.parse(localStorage.getItem(`${LS_KEY}admin`)),
    };

    let output = false;

    for(let user of users){
        if(auth[user]) output = true;
    }

    return output;
};