import React from 'react';
import {connect} from 'react-redux'
import {createHashHistory} from 'history'
//
import {withStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ListChoice from "./Choices/ListChoice";
import { disableButton } from '../../../Redux/reducer/disableReducer';

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
        display: 'flex',
        justifyContent : 'center'
    },
    resetContainer: {
        padding: theme.spacing.unit * 3,
    }
});


class QuestionChoice extends React.Component {
    state = {
        question: this.props.questions,
        activeStep: 0,
        disable : false
    };

    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
        this.props.dispatch(disableButton())
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };
    disableButton(e){
        e.preventDefault()
        this.setState({
            disableButton :true
        })
    }
    GotoHome(e){
        e.preventDefault()
        hist.push('/home')
    }
    render() {
        const {classes} = this.props;
        const {activeStep} = this.state;
        return (
            <div className={classes.root}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {this.state.question.map((label, index) => {
                        return (
                            <Step key={index}>
                                <StepLabel>{label.text}</StepLabel>
                                <StepContent>
                                    <ListChoice question={label}/>
                                    <div className={classes.actionsContainer}>
                                        <div>
                                            <Button
                                                disabled={activeStep === 0}
                                                onClick={this.handleBack}
                                                className={classes.button}
                                            >
                                                Back
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={this.handleNext}
                                                className={classes.button}
                                                disabled={this.props.button.disable}
                                            >
                                                {activeStep === this.state.question.length - 1 ? 'Finish' : 'Next'}
                                            </Button>
                                        </div>
                                    </div>
                                </StepContent>
                            </Step>
                        );
                    })}
                </Stepper>
                {/**/}
                {activeStep === this.state.question.length && (
                    <Paper square elevation={0} className={classes.resetContainer}>
                        <Button onClick={this.GotoHome.bind(this)} className={classes.button}>
                            Go to home
                        </Button>
                        <Button onClick={this.handleReset} className={classes.button}>
                            Reset my answer
                        </Button>
                    </Paper>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        button : state.button
    }
}
export default withStyles(styles)(connect(mapStateToProps)(QuestionChoice));