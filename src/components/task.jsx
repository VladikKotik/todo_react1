import React from "react";
import { Card, Grid, Label, Segment, Button } from "semantic-ui-react";
import TasksStore from "../stores/tasks_store";
import { Link } from "react-router-dom";
class Task extends React.Component {
    render() {
        const { id, author_id, text } = this.props.data;
        const del = () => {
            TasksStore.delete(id);
        };
        // const edit = () => {
        //     this.props.history.push({
        //         pathname: '/edit',
        //         state: { task: this.props.data ,
        //                 onEdit: TasksStore.edit}
        //     })
        // }
        return (
            <Card fluid>
                <Card.Content>
                    <Card.Description>{text}</Card.Description>
                    <Button class="ui button" onClick={del}>
                        удалить
                    </Button>
                    <Button class="ui button">
                        <Link
                            to={{
                                pathname: "/edit",
                                state: { id, author_id, text }
                            }}
                        >
                            {" "}
                            Редактировать{" "}
                        </Link>
                    </Button>
                </Card.Content>
            </Card>
        );
    }
}

export default Task;
