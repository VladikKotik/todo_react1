import {computed, decorate, observable} from "mobx"
import {TasksStore} from "./tasks_store";

export class store_auth {
    isLoggedIn =  !!localStorage.getItem('token')
    curUserId =  !!localStorage.getItem('current_user')

}
export default decorate( new store_auth(), {
    isLoggedIn: observable,
    curUserId: observable
})