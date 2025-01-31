import React from 'react'
import TasksStore from '../stores/tasks_store'
import {useLocation, withRouter} from "react-router-dom";

class EditView extends React.Component {
    state = {
        id: this.props.location.state.id,
        author_id: '',
        text: this.props.location.state.text
    }
    onBtnClickHandler = e => {
        e.preventDefault()
        const { /*author_id,*/ id, text} = this.state
        TasksStore.edit({
            id,
            author_id: localStorage.getItem('current_user'),
            text
        })
        this.props.history.push('/')
    }
    handleChange = e => {
        const {id, value} = e.currentTarget
        this.setState({[id]: e.currentTarget.value})
    }
    validate = () => {
        const {author_id, text} = this.state
        if (/*author_id.trim() &&*/ text.trim()) {
            return true
        }
        return false
    }

    render() {
        console.log(this.props);
        const {author_id, text} = this.state
        return (
            <form className="edit">
                <textarea
                    id="text"
                    onChange={this.handleChange}
                    className="edit__text"
                    placeholder="Текст заметки"
                    value={text}
                />
                <button
                    className="edit__btn"
                    onClick={this.onBtnClickHandler}
                    disabled={!this.validate()}
                > готово
                </button>
            </form>
        )
    }
}

// EditView.propTypes = {
//     onAddTasks: PropTypes.func.isRequired,
// }

export default withRouter(EditView)