import Rest from './common/_rest.service'
import {Factory} from '../fixtures/factory'

const URL_USERS = '/usuarios'
const URL_PRODUCT = '/produtos'
const URL_LOGIN = '/login'

export class ServeRest extends Rest {

    static get_all_users() {
        return super.httpRequestWithoutBody('GET', URL_USERS)

    }

    static post_user_by_type(type){
        let body = Factory.getUser(type)
        return super.httpRequestWithBody('POST', URL_USERS, body)

    }
    static get_all_products() {
        return super.httpRequestWithoutBody('GET', URL_PRODUCT)

    }
    static post_products_by_type(type){
        let body = Factory.posProdutos(type)
        return super.httpRequestWithBody('POST', URL_USERS, body)

    }
    static post_login_by_type(type){
        let body = Factory.postLogin(type)
        return super.httpRequestWithBody('POST', URL_LOGIN, body)

    }

}