import React, { Component } from 'react';
import { connect } from 'react-redux';
//
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
//icons
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { fetchListSurveysIncomming, changeJoinSurvey } from "../../../Redux/action/surveysActions";

class Home extends Component {
    componentDidMount() {
        this.props.dispatch(fetchListSurveysIncomming())
    }
    render() {
        const store = this.props.surveys
        return (
            <Grid item lg={4} md={5} xs={12}>
                <Paper>
                    <Typography variant="title" gutterBottom style={{ padding: '10px 0px 0px 20px' }}>
                        Join surveys
                    </Typography>
                    <List component="nav">
                        {store.surveys.map((survey, id) => {
                            if (id <= 4) {
                                return (
                                    <ListItem key={id} button>
                                        <ListItemText primary={survey.title} />
                                        <div style={{ flex: 1 }}></div>
                                        <IconButton onClick={()=>this.props.dispatch(changeJoinSurvey(survey.id))}>
                                            <ChevronRightIcon />
                                        </IconButton>
                                    </ListItem>
                                )
                            } else {
                                return null
                            }
                        })}
                    </List>
                </Paper>
            </Grid>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        surveys: state.surveys
    }
}
export default connect(mapStateToProps)(Home);