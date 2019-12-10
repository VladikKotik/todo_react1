import React from 'react'
import {Card, Grid, Label, Segment} from "semantic-ui-react";
import PropTypes from 'prop-types'
import TasksStore from '../stores/tasks_store'

class Add extends React.Component {
    state = {
        author_id: '',
        text: ''
    }
    onBtnClickHandler = e => {
        e.preventDefault()
        const { /*author_id,*/ text } = this.state
        TasksStore.add({
            id: +new Date(),
            author_id: localStorage.getItem('current_user'),
            text
        })
    }
    handleChange = e => {
        const { id, value } = e.currentTarget
        this.setState({ [id]: e.currentTarget.value })
    }
    validate = () => {
        const { author_id, text } = this.state
        if (/*author_id.trim() &&*/ text.trim()) {
            return true
        }
        return false
    }
    render() {
        const { author_id, text } = this.state
        return (
            <form className="add">
                <textarea
                    id="text"
                    onChange={this.handleChange}
                    className="add__text"
                    placeholder="Текст заметки"
                    value={text}
                />
                <button
                    className="add__btn"
                    onClick={this.onBtnClickHandler}
                    disabled={!this.validate()}
                > готово </button>
            </form>
        )
    }
}

Add.propTypes = {
    onAddTasks: PropTypes.func.isRequired,
}

export default Add