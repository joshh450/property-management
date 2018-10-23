import axios from 'axios';

export function signUp(fields, success) {
    console.log(fields);
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signUp`)
            // .then(response => {

            // })
            // .catch(err => {
            //     if(err) {console.log(oops)}
            // })
    }
}