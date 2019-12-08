import React from 'react'
import {Card, Grid, Label, Segment} from "semantic-ui-react";
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
        //const tasks = localStorage.getItem('tasks')
        const tasks = TasksStore.tasks
        return (
            <div>
                <Add onAddTasks={this.handleChangedTasks}/>
                //вот че надо ему?! я уже так делал в другом месте


                <Segment textAlign='center' raised>
                    <h1>Список задач:</h1>

                    <Card.Group>
                        {this.renderTasks()}
                        {/*<Card fluid>*/}
                        {/*    <Card.Content>*/}
                        {/*        <Card.Header>Автор</Card.Header>*/}
                        {/*        <Card.Meta><Label size='tiny' color='red'>удалить</Label></Card.Meta>*/}
                        {/*        <Card.Description>Описание</Card.Description>*/}
                        {/*    </Card.Content>*/}
                        {/*</Card>*/}
                    </Card.Group>
                </Segment>
            </div>
        )
    }
}

export default Tasks