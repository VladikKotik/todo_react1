import {computed, observable} from "mobx"

export class store_auth {
    isLoggedIn =  !!localStorage.getItem('token')
    curUserId =  !!localStorage.getItem('current_user')

    // signIn(){
    //
    // }
}
export default new store_auth()
