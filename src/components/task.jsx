import React from 'react'
import {Card, Grid, Label, Segment} from "semantic-ui-react";
import PropTypes from 'prop-types'
import TasksStore from '../stores/tasks_store'

class Task extends React.Component {

    render() {
        const { id,author_id,text } = this.props.data
        return (
        <Card fluid>
            <Card.Content>
                <Card.Description>{text}</Card.Description>
                {/*<Card.Meta><Label size='tiny' color='red' onClick={TasksStore.delete(id)}>удалить</Label></Card.Meta>*/}
            </Card.Content>
        </Card>
        )
    }
}

// Task.propTypes = {
//     data: PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         author_id: PropTypes.number.isRequired,
//         text: PropTypes.string.isRequired
//     })
// }
export default Task