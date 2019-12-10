import React from 'react'
import {Card, Grid, Label, Segment,Button} from "semantic-ui-react";
import TasksStore from '../stores/tasks_store'

class Task extends React.Component {

    render() {
        const { id,author_id,text } = this.props.data
        const del = () => {
            TasksStore.delete(id)
        }
        return (
            <Card fluid>
                <Card.Content>
                    <Card.Description>{text}</Card.Description>
                    <Button class="ui button" onClick={del}>
                        удалить
                    </Button>
                </Card.Content>
            </Card>
        )
    }
}

export default Task