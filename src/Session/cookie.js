import Cookies from 'js-cookie'

const cookies = {}

cookies.setCookie = (token) => {
    Cookies.set('token', token, { expires: 30 });
}

cookies.getCookie = () => {
    return Cookies.get('token');
}

cookies.quit = () => {
    Cookies.set('token', '');
}

export default cookies;
