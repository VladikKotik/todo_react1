import {computed, observable} from "mobx"

export class TasksStore {
    @observable tasks= JSON.parse(localStorage.getItem('tasks'))

     getTasksByUserId(authorId_){
         let t;
         let res;
         return
     }


}
function filterById(){

}
export default new TasksStore()