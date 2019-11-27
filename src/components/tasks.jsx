import React from 'react'
import {Card, Grid, Label, Segment} from "semantic-ui-react";
import Add from './add_edit';
import Task from './task';

class Tasks extends React.Component {

    handleChangedTasks = data => {
        const nextTasks = [data, ...this.tasks]
        localStorage.setItem('tasks',nextTasks)
    }

    render() {
        const tasks= localStorage.getItem('tasks')
        return (

          //  <Add onAddTasks={this.handleChangedTasks}/>
            //вот че надо ему?! я уже так делал в другом месте


            <Segment textAlign='center' raised>
                <h1>Список задач:</h1>

                <Card.Group>
                    <Card fluid>
                        <Card.Content>
                            <Card.Header>Автор</Card.Header>
                            <Card.Meta><Label size='tiny' color='red'>удалить</Label></Card.Meta>
                            <Card.Description>Описание</Card.Description>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </Segment>
        )
    }
}
export default Tasks