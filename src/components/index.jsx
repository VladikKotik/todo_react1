import React from 'react'
import {Grid, Menu, MenuItem, Button, Segment, Card, Label} from 'semantic-ui-react'
import { Link, withRouter } from 'react-router-dom'
import logoImg from '../logo.png'
import AuthService from '../services/auth.service'
import Tasks from "./tasks";

class IndexView extends React.Component{
    constructor(props) {
        super(props)
    }

    handleSignOut = () => {
        AuthService.logout()
        this.props.history.push('/login')
    }

    render() {

        return (
            <Grid textAlign='center' style={{ height: '100vh', margin: '0px' }}>
                <Grid.Column style={{ width: 1000 }}>
                    <Menu>
                        <MenuItem>
                            <img src={logoImg}/>
                            <h4 style={{margin: '0 0 0 10px'}}>ToDo App</h4>
                        </MenuItem>

                        <MenuItem position='right'>
                            <Button onClick={this.handleSignOut} color='red'>Выйти</Button>
                        </MenuItem>
                    </Menu>

                    <Tasks />

                </Grid.Column>
            </Grid>
        )
    }


}

export default withRouter(IndexView)