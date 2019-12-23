import {decorate, observable} from "mobx"

export class store_auth {
    isLoggedIn = !!localStorage.getItem('token')
    curUserId = !!localStorage.getItem('current_user')

    setIsAuth = () => {
        this.isLoggedIn = !!localStorage.getItem('token')
    }

}

export default decorate(new store_auth(), {
    isLoggedIn: observable,
    curUserId: observable
})