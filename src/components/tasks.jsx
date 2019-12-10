import React from 'react'
import {Card, Grid, Label, Segment} from "semantic-ui-react";
import {inject, observer} from "mobx-react";
import Add from './add';
import Task from './task';
import TasksStore from '../stores/tasks_store'

class Tasks extends React.Component {

    handleChangedTasks = data => {
        const nextTasks = [data, ...this.tasks]
        localStorage.setItem('tasks', nextTasks)
    }



    renderTasks = () => {
        const data = TasksStore.tasks
        let taskTemplate = null

        if (data && data.length) {
            taskTemplate = data.map(function (item) {
                return <Task key={item.id} data={item}/>
            })
        } else {
            taskTemplate = <p>заметок.net</p>
        }
        return taskTemplate
    }

    render() {
        return (
            <div>
                <Add onAddTasks={this.handleChangedTasks}/>
              <Segment textAlign='center' raised>
                    <h1>Список задач:</h1>

                    <Card.Group>
                        {this.renderTasks()}

                    </Card.Group>
                </Segment>
            </div>
        )
    }
}

export default observer(Tasks)