import React, {Component} from 'react';
import {connect} from 'react-redux'

//ui
import Paper from '@material-ui/core/Paper';
import {withStyles} from "@material-ui/core/styles/index";
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
//icons
import { nonImage } from '../../../../nonImage';
import Questions from './Questions';

class Details extends Component {
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
                        {survey.questions instanceof  Array ? 
                            survey.questions.map((question,id)=>{
                                return(
                                    <Questions key={id} question={question}/>
                                )
                            })
                            : 
                            <Questions question={survey.questions}/>
                        }
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
export default withStyles(styles)(connect(mapStateToProps)(Details));