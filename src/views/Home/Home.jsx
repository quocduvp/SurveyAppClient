import React, {Component} from 'react';
//
import Grid from '@material-ui/core/Grid'
//icons
import SurveysUncomming from "./SurveysUncomming/SurveysUncomming";
import SurveysIncomming from "./SurveysIncomming/SurveysIncomming";

class Home extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={24}>
                    <SurveysUncomming/>
                    <SurveysIncomming/>
                </Grid>
            </div>
        );
    }
}

export default Home;