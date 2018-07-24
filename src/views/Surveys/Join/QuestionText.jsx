import React, { Component } from 'react';
import {connect} from 'react-redux'
import {createHashHistory} from 'history'
//ui
import { withStyles } from "@material-ui/core/styles/index";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { submitAnswerForQuestion } from '../../../Redux/action/surveysActions';
import {disableButton } from '../../../Redux/reducer/disableReducer';
//
const hist = createHashHistory()
const styles = theme => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    actionsContainer: {
        marginBottom: theme.spacing.unit * 2,
    },
    resetContainer: {
        padding: theme.spacing.unit * 3,
    }
});

class QuestionText extends Component {
    state = {
        text: "",
        questions_choice_id: null
    }
    HandleChange(e) {
        e.preventDefault()
        this.setState({
            text: e.target.value
        })
    }
    SubmitButton(e) {
        e.preventDefault()
        let idquestion = this.props.questions.id
        let idsurvey = this.props.questions.surveys_id
        this.props.dispatch(submitAnswerForQuestion(this.state,idsurvey,idquestion))
    }
    render() {
        const { classes } = this.props;
        const question = this.props.questions
        return (
            <div className={classes.root}>
                <form>
                    <Typography>
                        <QuestionAnswerIcon style={{ color: '#F44336' }} />{' '}
                        {question.text}
                    </Typography>
                    <TextField
                        id="full-width"
                        label="My answer"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{pattern:".{20,}"}}
                        disabled={this.props.button.disable ? false : true}
                        onChange={this.HandleChange.bind(this)}
                        placeholder={question.asks.text}
                        helperText="More than > 5 letters"
                        fullWidth
                        margin="normal"
                    />
                    <div style={{ display: 'flex' }}>
                        <Typography style={{ flex: 1 }}>

                        </Typography>
                        {this.props.button.disable ? '' :
                            <Button onClick={()=>hist.push('/home')} variant="contained" color="primary" style={{ backgroundColor: '#3F51B5', marginRight:'16px' }}>
                                Return home page
                            </Button>
                        }
                        {this.props.button.disable ?
                            <Button onClick={this.SubmitButton.bind(this)} disabled={this.state.text.length >= 5 ? false : true} variant="contained" color="secondary" style={{ backgroundColor: '#3F51B5' }}>
                                Submit answer
                            </Button> :
                            <Button onClick={()=>this.props.dispatch(disableButton())} variant="contained" color="primary" style={{ backgroundColor: '#3F51B5' }}>
                                Update answer
                            </Button>
                        }
                    </div>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        button : state.button
    }
}
export default withStyles(styles)(connect(mapStateToProps)(QuestionText));