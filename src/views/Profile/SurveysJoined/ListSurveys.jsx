import React, { Component } from 'react';
import { connect } from 'react-redux'
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ViewIcon from "@material-ui/icons/RemoveRedEye"
//icons
import { fetchListSurveysSubmitted, fetchDetailsSurveysSubmitted } from "../../../Redux/action/surveysActions";
import { nonImage } from '../../../nonImage';
class ListSurveys extends Component {
    componentDidMount() {
        this.props.dispatch(fetchListSurveysSubmitted())
    }
    render() {
        const { classes } = this.props;
        const store = this.props.surveys
        return (
            <div>
                <Typography variant="title" style={{color:'#fff'}} gutterBottom>
                    My list of surveys
                </Typography>
                {store.surveys_joinned.map((survey, id) => {
                    return (
                        <Card style={{backgroundColor:this.props.cardColor}} key={id} className={classes.card}>
                            <CardMedia
                                className={classes.cover}
                                image={survey.survey.thumb != null ? survey.survey.thumb : nonImage}
                                title="thumb"
                            />
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography variant="headline">{survey.survey.title}</Typography>
                                    <Typography variant="subheading" color="textSecondary">
                                        Joinned at {survey.create_at.substring(0, 10)}
                                    </Typography>
                                </CardContent>
                            </div>
                            <Button onClick={()=>this.props.dispatch(fetchDetailsSurveysSubmitted(survey.id))}>
                                <ViewIcon style={{color:'#fff'}}/>
                            </Button>
                        </Card>
                    )
                })}
            </div>
        )
    }
}
const styles = theme => ({
    card: {
        display: 'flex',
        marginTop: '16px',
        marginBottom : '8px'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 200
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        minWidth: 0
    },
    playIcon: {
        height: 38,
        width: 38,
    },
});
const mapStateToProps = (state) => {
    return {
        surveys: state.surveys
    }
}
export default withStyles(styles)(connect(mapStateToProps)(ListSurveys))