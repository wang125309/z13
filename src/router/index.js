import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

const Home = r => require.ensure([], ()=>r(require('@/components/Home.vue')))
const Register = r => require.ensure([], ()=>r(require('@/components/Register.vue')))
const RegisterSuccess = r => require.ensure([], ()=>r(require('@/components/RegisterSuccess.vue')))
const Login = r => require.ensure([], ()=>r(require('@/components/Login.vue')))
const ValidMobile = r => require.ensure([], ()=>r(require('@/components/ValidMobile.vue')))
const ResetPassword = r => require.ensure([], ()=>r(require('@/components/ResetPassword.vue')))
const ResetPasswordSuccess = r => require.ensure([], ()=>r(require('@/components/ResetPasswordSuccess.vue')))
const My = r => require.ensure([], ()=>r(require('@/components/My.vue')))
const MyActivity = r => require.ensure([], ()=>r(require('@/components/MyActivity.vue')))
const Activity = r => require.ensure([], ()=>r(require('@/components/Activity.vue')))
const Operation = r => require.ensure([], ()=>r(require('@/components/Operation.vue')))
const OperationDetail = r => require.ensure([], ()=>r(require('@/components/OperationDetail.vue')))
const CompanyList = r => require.ensure([], ()=>r(require('@/components/CompanyList.vue')))
const CompanyIdentification = r => require.ensure([], ()=>r(require('@/components/CompanyIdentification.vue')))
const CompanyIdentificationSuccess = r => require.ensure([], ()=>r(require('@/components/CompanyIdentificationSuccess.vue')))
const BuildingLayout = r => require.ensure([], ()=>r(require('@/components/BuildingLayout.vue')))
const ActivityList = r => require.ensure([], ()=>r(require('@/components/ActivityList.vue')))
const PageNotFound = r => require.ensure([], ()=>r(require('@/components/PageNotFound.vue')))
const Problem = r => require.ensure([], ()=>r(require('@/components/Problem.vue')))
const RentBuilding = r => require.ensure([], ()=>r(require('@/components/RentBuilding.vue')))
const ServiceList = r => require.ensure([], ()=>r(require('@/components/ServiceList.vue')))
const DeliveryList = r => require.ensure([], ()=>r(require('@/components/DeliveryList.vue')))
const DeliveryDetails = r => require.ensure([], ()=>r(require('@/components/DeliveryDetails.vue')))
const BuildingService = r => require.ensure([], ()=>r(require('@/components/BuildingService.vue')))
const ServiceDetails = r => require.ensure([], ()=>r(require('@/components/ServiceDetails.vue')))
const Service = r => require.ensure([], ()=>r(require('@/components/Service.vue')))
const Water = r => require.ensure([], ()=>r(require('@/components/Water.vue')))
const WaterList = r => require.ensure([], ()=>r(require('@/components/WaterList.vue')))
const WashCar = r => require.ensure([], ()=>r(require('@/components/WashCar.vue')))
const WashCarList = r => require.ensure([], ()=>r(require('@/components/WashCarList.vue')))
const Clean = r => require.ensure([], ()=>r(require('@/components/Clean.vue')))
const CleanList = r => require.ensure([], ()=>r(require('@/components/CleanList.vue')))
const UserInfo = r => require.ensure([], ()=>r(require('@/components/UserInfo.vue')))
const ChangeAvatar = r => require.ensure([], ()=>r(require('@/components/ChangeAvatar.vue')))
const ChangeName = r => require.ensure([], ()=>r(require('@/components/ChangeName.vue')))
const ChangeCompany = r => require.ensure([], ()=>r(require('@/components/ChangeCompany.vue')))
const ChangeCompanyPosition = r => require.ensure([], ()=>r(require('@/components/ChangeCompanyPosition.vue')))
const ChangeMobile = r => require.ensure([], ()=>r(require('@/components/ChangeMobile.vue')))

export default new Router({
    scrollBehavior: () => ({y: 0}),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/register-success',
            name: 'RegisterSuccess',
            component: RegisterSuccess
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/valid-mobile',
            name: 'ValidMobile',
            component: ValidMobile
        },
        {
            path: '/forget-password',
            name: 'ValidMobile',
            component: ValidMobile
        },
        {
            path: '/reset-password',
            name: 'ResetPassword',
            component: ResetPassword
        },
        {
            path: '/reset-password-success',
            name: 'ResetPasswordSuccess',
            component: ResetPasswordSuccess
        },
        {
            path: '/personal-info',
            name: 'My',
            component: My
        },
        {
            path: '/my-activity',
            name: 'MyActivity',
            component: MyActivity
        },
        {
            path: '/activity/:id/',
            name: 'Activity',
            component: Activity
        },
        {
            path: '/operation',
            name: 'Operation',
            component: Operation
        },
        {
            path: '/operation-detail',
            name: 'OperationDetail',
            component: OperationDetail
        },
        {
            path: '/company-list',
            name: 'CompanyList',
            component: CompanyList
        },
        {
            path: '/company-identification',
            name: 'CompanyIdentification',
            component: CompanyIdentification
        },
        {
            path: '/company-identification-success',
            name: 'CompanyIdentificationSuccess',
            component: CompanyIdentificationSuccess
        },
        {
            path: '/building-layout',
            name: 'BuildingLayout',
            component: BuildingLayout
        },
        {
            path: '/activity-list',
            name: 'ActivityList',
            component: ActivityList
        },
        {
            path: '/404',
            name: 'PageNotFound',
            component: PageNotFound
        },
        {
            path: '/problem',
            name: 'Problem',
            component: Problem
        },
        {
            path: '/rent-building',
            name: 'RentBuilding',
            component: RentBuilding
        },
        {
            path: '/service-list',
            name: 'ServiceList',
            component: ServiceList
        },
        {
            path: '/delivery-details/:id',
            name: 'DeliveryDetails',
            component: DeliveryDetails
        },
        {
            path: '/wash-car-list',
            name: 'WashCarList',
            component: WashCarList
        },
        {
            path: '/wash-car/:id',
            name: 'WashCar',
            component: WashCar
        },
        {
            path: '/water-list',
            name: 'WaterList',
            component: WaterList
        },
        {
            path: '/water/:id',
            name: 'Water',
            component: Water
        },
        {
            path: '/clean/:id',
            name: 'Clean',
            component: Clean
        },
        {
            path: '/clean-list',
            name: 'CleanList',
            component: CleanList
        },
        {
            path: '/delivery-list',
            name: 'DeliveryList',
            component: DeliveryList
        },
        {
            path: '/building-service',
            name: 'BuildingService',
            component: BuildingService
        },
        {
            path: '/service-details/:id',
            name: 'ServiceDetails',
            component: ServiceDetails
        },
        {
            path: '/service',
            name: 'Service',
            component: Service
        },
        {
            path: '/user-info',
            name: 'UserInfo',
            component: UserInfo
        },
        {
            path: '/change-avatar',
            name: 'ChangeAvatar',
            component: ChangeAvatar
        },
        {
            path: '/change-name',
            name: 'ChangeName',
            component: ChangeName
        },
        {
            path: '/change-mobile',
            name: 'ChangeMobile',
            component: ChangeMobile
        },
        {
            path: '/change-company',
            name: 'ChangeCompany',
            component: ChangeCompany
        },
        {
            path: '/change-avatar-position',
            name: 'ChangeCompanyPosition',
            component: ChangeCompanyPosition
        }
    ]
})
