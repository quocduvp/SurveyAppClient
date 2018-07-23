import React, {Component} from 'react';
import {connect} from 'react-redux'
//
import {withStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import { submitAnswerForQuestion } from '../../../../Redux/action/surveysActions';
class ListChoice extends Component {
    state = {
        value: "",
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
        console.log(event.target.value)
        let form = {
            text : "",
            question_choice_id : event.target.value
        }
        let surveyid = this.props.question.surveys_id
        let questionid = this.props.question.id
        this.props.dispatch(submitAnswerForQuestion(form,surveyid,questionid))
    };
    render() {
        const asks = this.props.question.asks
        const {classes} = this.props
        return (
            <div>
                <FormControl style={{width: '100%'}}>
                    <RadioGroup
                        aria-label=""
                        name="answer"
                        className={classes.group}
                        value={this.state.value}
                        onChange={this.handleChange.bind(this)}
                    >
                        {asks.map((ask, id) => {
                            return (
                                <FormControlLabel style={{flex:1}} key={id} value={String(ask.id)} control={<Radio color="primary"/>}
                                                  label={ask.description}/>
                            )
                        })}
                    </RadioGroup>
                </FormControl>
            </div>
        );
    }
}

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        width : '100%',
        margin: `${theme.spacing.unit}px 0`,
        display: 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
});

export default withStyles(styles)(connect()(ListChoice));