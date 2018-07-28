import React from 'react';
import { connect } from 'react-redux'
//
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { fetchListSurveysIncomming, changeJoinSurvey, viewDetailsSurvey } from "../../../Redux/action/surveysActions";
import { nonImage } from '../../../nonImage';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        color: theme.palette.text.secondary,
    },
    media: {
        height: '200px',
        width: '100%'
    },
    link: {
        textDecoration: 'none'
    }
});

class GridList extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchListSurveysIncomming())
    }
    JoinSurveys(id, e) {
        e.preventDefault()
        this.props.dispatch(changeJoinSurvey(id))
    }
    ReviewSurveys(id,e){
        e.preventDefault()
        this.props.dispatch(viewDetailsSurvey(id))
    }
    render() {
        const { classes } = this.props
        const store = this.props.surveys
        return (
            <div className={classes.root}>
                <Grid container spacing={8}>
                    {store.surveys.map((survey, id) => {
                        return (
                            <Grid key={id} item xl={3} md={4} sm={6} xs={12}>
                                <Paper>
                                    <Card className={classes.paper} style={{ position: 'relative',backgroundColor:'#43a047' }}>
                                        <CardMedia
                                            className={classes.media}
                                            image={survey.thumb != null ? survey.thumb : nonImage}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="headline" component="h2">
                                                {survey.title}
                                            </Typography>
                                            <Typography component="p">
                                                {survey.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button onClick={this.ReviewSurveys.bind(this, survey.id)} size="medium" color="default" style={{ marginLeft: 'auto' }}>
                                                View
                                            </Button>
                                            <Button onClick={this.JoinSurveys.bind(this, survey.id)} size="medium" color="default">
                                                Join
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Paper>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        surveys: state.surveys
    }
}
export default withStyles(styles)(connect(mapStateToProps)(GridList));