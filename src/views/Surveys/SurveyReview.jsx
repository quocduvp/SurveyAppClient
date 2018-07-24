import React, {Component} from 'react';
import {connect} from 'react-redux'
import { nonImage } from '../../nonImage'
//ui
import Paper from '@material-ui/core/Paper';
import {withStyles} from "@material-ui/core/styles/index";
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
//icons
import WidgetsIcon from '@material-ui/icons/Widgets'
import CheckIcon from '@material-ui/icons/Check'
import PeopleIcon from '@material-ui/icons/People'
import PublishIcon from '@material-ui/icons/Publish'

class SurveyReview extends Component {
    render() {
        const {classes} = this.props
        const survey = this.props.surveys.details
        return (
            <Paper>
                <Card>
                    <div id={'title'} style={{padding: '16px 10px'}}>
                        <Typography variant="headline">
                            {survey.title}
                        </Typography>
                    </div>
                    <CardMedia
                        className={classes.media}
                        image={survey.thumb !== null ? survey.thumb :nonImage}
                    />
                    <div id={'description'} style={{padding: '10px'}}>
                        <Typography variant="subheading">
                            {survey.description}
                        </Typography>
                    </div>
                    <CardContent>
                        <Typography variant="title">
                            Information:
                        </Typography>
                        <List>
                            <ListItem button>
                                <ListItemIcon>
                                    <WidgetsIcon/>
                                </ListItemIcon>
                                <ListItemText inset 
                                primary={`Type of questions: ${survey.surveys_type.name}`}/>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <CheckIcon/>
                                </ListItemIcon>
                                <ListItemText inset 
                                primary={`Number of questions: ${survey.total_questions}`}/>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <PeopleIcon/>
                                </ListItemIcon>
                                <ListItemText inset primary={`Participants: ${survey.total_joinners}`}/>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <PublishIcon/>
                                </ListItemIcon>
                                <ListItemText inset 
                                primary={`Date start: ${survey.date_start.substring(0,10)}`}/>
                            </ListItem>
                        </List>
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
export default withStyles(styles)(connect(mapStateToProps)(SurveyReview));