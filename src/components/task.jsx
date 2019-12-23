import React from "react";
import {Button, Card} from "semantic-ui-react";
import TasksStore from "../stores/tasks_store";
import { withRouter } from "react-router-dom";

class Task extends React.Component {
    render() {
        const {id, author_id, text} = this.props.data;
        const del = () => {
            TasksStore.delete(id);
        };

        const edit = () =>{
            this.props.history.push({pathname: "/edit",
                state: {id, author_id, text}})
        }

        return (
            <Card fluid>
                <Card.Content>
                    <Card.Description>{text}</Card.Description>
                    <Button className="ui button" onClick={del}>
                        удалить
                    </Button>
                    <Button className="ui button" onClick={edit}>
                        Редактировать
                    </Button>
                </Card.Content>
            </Card>
        );
    }
}

export default withRouter(Task);
