import React, {Component} from 'react';
import QuestionChoice from './Join/QuestionChoice'
import {connect} from 'react-redux'
import QuestionText from './Join/QuestionText'
//ui
import Paper from '@material-ui/core/Paper';
import {withStyles} from "@material-ui/core/styles/index";
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {nonImage} from '../../nonImage'
class SurveyJoinning extends Component {
    render() {
        const {classes} = this.props
        const joinning = this.props.surveys.joinning
        return (
            <Paper>
                <Card>
                    <div id={'title'} style={{padding: '16px 10px'}}>
                        <Typography variant="headline">{joinning.title}</Typography>
                    </div>
                    <CardMedia
                        className={classes.media}
                        image={joinning.thumb != null ? joinning.thumb : nonImage}
                    />
                    <div id={'description'} style={{padding: '10px'}}>
                        <Typography variant="subheading">
                            {joinning.description}
                        </Typography>
                    </div>
                    <CardContent>
                        {joinning.surveys_type_id === 0 ? <QuestionText questions={joinning.questions}/> : <QuestionChoice questions={joinning.questions}/> }
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

const mapStateToProps = (state) => {
    return {
        surveys : state.surveys
    }
}
export default withStyles(styles)(connect(mapStateToProps)(SurveyJoinning));