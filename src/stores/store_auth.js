import {computed, observable} from "mobx"

export class store_auth {
    @observable isLoggedIn =  !!localStorage.getItem('token')

    // signIn(){
    //
    // }
}
export default new store_auth()