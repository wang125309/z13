const API = {
    wx_authorize: '/common/wx/authorize',
    get_image_code: '/common/imageCode',
    valid_image_code: '/common/imageCode/verify',
    verify_phone_code: '/common/phoneCode/verify',
    send_phone_Code: '/common/phoneCode',
    do_login: '/front/login',
    do_logout: '/front/logout',
    get_homepage: '/front/homepage',
    do_register: '/front/register',
    get_user_info: '/front/user/info',
    password: '/front/user/password',
    get_problem: '/front/operation/problems',
    get_activitys: '/front/operation/activitys',
    building: '/front/buildings',
    company: '/front/companys',
    comment: '/front/operation/comments',
    foodshops: '/front/foodshops',
    washcars: '/front/washcars',
    cleanings: '/front/cleanings',
    watersupplys: '/front/watersupplys',
    news: '/front/news',
    rentableunits: '/front/rentableunits',
    uploadImage: '/common/file/base64/upload'
};

export default API;
