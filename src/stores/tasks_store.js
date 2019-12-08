import {computed, observable} from "mobx"

export class TasksStore {
    tasks = [
        {
            id: 1,
            author_id: 1,
            text: 'sjhfhjhhk'
        },
        {
            id: 2,
            author_id: 1,
            text: 'sjdjhfjfjs'
        },
        {
            id: 3,
            author_id: 2,
            text: 'sjfjgjhjs'
        },
        {
            id: 4,
            author_id: 2,
            text: 'sssfiighih'
        },
    ]

    // delete(id) {
    //     this.tasks.map(function (item) {
    //         if (item.id == id) {
    //             let index = this.tasks.indexOf(item)    //тут беда с контекстом/областью видимости типа
    //             delete this.tasks[index]
    //         }
    //     })
    // }

    Add = data => {
        const nextTasks = [data, ...this.tasks]
        this.tasks=nextTasks
    }
}
export default new TasksStore()