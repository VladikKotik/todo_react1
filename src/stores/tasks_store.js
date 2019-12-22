import {action, decorate, observable} from "mobx";

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
        //console.log('id',id)
        this.tasks = this.tasks.filter((task) => task.id !== id)
    }

    add = (data) => {
        const nextTasks = [data, ...this.tasks]
        this.tasks = nextTasks
    }

    edit = (data) => {  //думал искать его, потом решил сделать втупую. если бы там была бек или база, а тот тут собирать/разбираь массив
        this.delete(data.id)
        this.add(data)
    }
}

export default decorate(new TasksStore(), {
    tasks: observable,
    delete: action
})