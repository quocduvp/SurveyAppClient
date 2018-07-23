import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
//icons
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import {fetchListSurveysUncomming} from "../../../Redux/action/surveysActions";
class SurveysUncomming extends Component {
    componentDidMount(){
        this.props.dispatch(fetchListSurveysUncomming())
    }
    render() {
        const {classes} = this.props;
        const store = this.props.surveys
        return (
            <Grid item lg={8} md={7} xs={12}>
                <div>
                    <Typography variant="title" gutterBottom>
                        Next to:
                    </Typography>
                    {store.surveys_uncomming.map((survey,id)=>{
                        return(
                            <Card key={id} className={classes.card}>
                                <CardMedia
                                    className={classes.cover}
                                    image={survey.thumb}
                                    title="thumb"
                                />
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <Typography variant="headline">{survey.title}</Typography>
                                        <Typography variant="subheading" color="textSecondary">
                                            upcoming {survey.date_start.substring(0,10)}
                                        </Typography>
                                    </CardContent>
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </Grid>
        )
    }
}
const styles = theme => ({
    card: {
        display: 'flex',
        marginTop: '16px'
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
const mapStateToProps = (state)=>{
    return{
        surveys : state.surveys
    }
}
export default withStyles(styles)(connect(mapStateToProps)(SurveysUncomming))