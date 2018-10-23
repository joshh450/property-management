import axios from 'axios';

export function signUp(fields, success) {
    console.log(fields);
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signUp`, fields)
            .then(response => {
               console.log(response);
               success()
            })
            .catch(err => {
                if(err) { console.log(err) }
            })
    }
}