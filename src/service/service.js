import axios from 'axios'
import cookie from '../Session/cookie'

const requests = (url, options, success, error) => {
    axios.defaults.headers.common['Authorization'] = cookie.getCookie() ? cookie.getCookie() : '';
    url = 'https://cbd-proxy.limijiaoyin.io' + url;
    let type = 'GET';
    if (options.type === 'POST') {
        type = 'POST';
    }
    else if (options.type === 'PUT') {
        type = 'PUT';
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
                console.log(response.data)
                success(response.data);
            }
        }
        else {
            error(response);
        }
    };
    if (type === 'GET') {
        axios.get(`${url}`, {
            params: options.data
        }).then((response) => {
            callback(response);
        }).catch((err) => {
            if (err.response.status === 401) {
                callback(err.response)
            }
            else {
                callback(err.response.data);
            }

        });
    }
    else if (type === 'POST') {
        axios.post(`${url}`,
            options.data
        ).then((response) => {
            callback(response);
        }).catch((err) => {
            callback(err.response);
        });
    }
    else if (type === 'PUT') {
        axios.put(`${url}`,
            options.data
        ).then((response) => {
            callback(response);
        }).catch((err) => {
            callback(err.response);
        });
    }
}

export default requests;