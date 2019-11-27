import React from 'react'
import {Card, Grid, Label, Segment} from "semantic-ui-react";
import PropTypes from 'prop-types'

class Task extends React.Component {

    render() {
        const { text } = this.props.data
        return (
            <div className="task">
                <p className="task__text">{text}</p>
            </div>
        )
    }
}

Task.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        author_id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    })
}
export default Task