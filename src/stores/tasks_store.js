import {computed, decorate, observable, action} from "mobx";

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

    delete = (id) => {
        console.log('id',id)
        this.tasks = this.tasks.filter((task)=> task.id !== id)
    }

    add = (data) => {
        const nextTasks = [data, ...this.tasks]
        this.tasks=nextTasks
    }
}
export default decorate( new TasksStore(), {
    tasks: observable,
    delete: action
})