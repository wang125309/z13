import Cookies from 'js-cookie'

const cookies = {}

cookies.setCookie = (token) => {
    Cookies.set('token', token);
}

cookies.getCookie = () => {
    return Cookies.get('token')
}

export default cookies;