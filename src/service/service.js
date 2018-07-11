import axios from 'axios'
import cookie from '../Session/cookie'

const requests = (url, options, success, error) => {
    axios.defaults.headers.common['Authorization'] = cookie.getCookie() ? cookie.getCookie() : '';
    let type = 'GET';
    if (options.type === 'POST') {
        type = 'POST';
    }
    const callback = (response) => {
        if (response.status === 200) {
            if (response.data.success === true) {
                success(response.data);
            }
            else if (response.data.success === false){
                error(response.data);
            }
            else {
                success(response.data);
            }
        }
        else {
            error(response);
        }
    };
    if (type === 'GET') {
        axios.get(`${url}`, options.data).then((response) => {
            callback(response);
        }).catch((err) => {
            callback(err);
        });
    }
    else if (type === 'POST') {
        axios.post(`${url}`, options.data).then((response) => {
            callback(response);
        }).catch((err) => {
            callback(err);
        });
    }
}

export default requests;