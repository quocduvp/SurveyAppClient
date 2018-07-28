import React, { Component } from 'react';
import Pane from './Pane';
import MyProfile from './MyProfile';
import ListSurveys from './SurveysJoined/ListSurveys';
class Profile extends Component {
    render() {
        return (
            <div>
                <Pane bgColor={'#43a047'}>
                    <MyProfile/>
                </Pane>
                <Pane bgColor={'#43a047'}>
                    <ListSurveys cardColor={'#76d275'}/>
                </Pane>
            </div>
        );
    }
}

export default Profile;