const API = {
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
    comment: '/front/operation/comments'
};

export default API;