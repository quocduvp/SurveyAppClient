import React from 'react';
import {connect} from 'react-redux'
//
import {Link} from 'react-router-dom'
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {fetchListSurveysIncomming} from "../../../Redux/action/surveysActions";

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

    render() {
        const {classes} = this.props
        const store = this.props.surveys
        return (
            <div className={classes.root}>
                <Grid container spacing={8}>
                    {store.surveys.map((survey, id) => {
                        return (
                            <Grid item xl={3} md={4} sm={6} xs={12}>
                                <Paper>
                                    <Card className={classes.paper} style={{position: 'relative'}}>
                                        <CardMedia
                                            className={classes.media}
                                            image={survey.thumb}
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
                                            <Link to={`/Surveys/Reviews/${survey.id}`} className={classes.link}
                                                  style={{marginLeft: 'auto'}}>
                                                <Button size="small" color="primary">
                                                    View
                                                </Button>
                                            </Link>
                                            <Link to={`/Surveys/Joinning/${survey.id}`} className={classes.link}>
                                                <Button size="small" color="primary">
                                                    Join
                                                </Button>
                                            </Link>
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