import React, {Component} from 'react';
import QuestionChoice from './Join/QuestionChoice'
// import QuestionText from './Join/QuestionText'
//ui
import Paper from '@material-ui/core/Paper';
import {withStyles} from "@material-ui/core/styles/index";
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class SurveyJoinning extends Component {
    render() {
        const {classes} = this.props
        console.log(this)
        return (
            <Paper>
                <Card>
                    <div id={'title'} style={{padding: '16px 10px'}}>
                        <Typography variant="headline">Live From Space</Typography>
                    </div>
                    <CardMedia
                        className={classes.media}
                        image={'https://www.w3schools.com/css/img_5terre_wide.jpg'}
                    />
                    <div id={'description'} style={{padding: '10px'}}>
                        <Typography variant="subheading">
                            bla ladsa
                        </Typography>
                    </div>
                    <CardContent>
                        <QuestionChoice/>
                    </CardContent>
                </Card>
            </Paper>
        );
    }
}

const styles = theme => ({
    media: {
        height: '200px',
        width: '100%'
    },
});

export default withStyles(styles)(SurveyJoinning);