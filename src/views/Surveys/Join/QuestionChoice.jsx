import React from 'react';
//
import {withStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ListChoice from "./Choices/ListChoice";

//
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
        question: [
            {
                title: "question1",
                ask: ["cau1", "cau2", "cau3"]
            },
            {
                title: "question2",
                ask: ["cau1", "cau2", "cau3"]
            },
            {
                title: "question3",
                ask: ["cau1", "cau2", "cau3"]
            },
            {
                title: "question3",
                ask: ["cau1", "cau2", "cau3"]
            }
        ],
        activeStep: 0,
    };

    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
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

    render() {
        const {classes} = this.props;
        const {activeStep} = this.state;
        return (
            <div className={classes.root}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {this.state.question.map((label, index) => {
                        return (
                            <Step key={label}>
                                <StepLabel>{label.title}</StepLabel>
                                <StepContent>
                                    <ListChoice question={label.ask}/>
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
                        <Typography>All steps completed - you&quot;re finished</Typography>
                        <Button onClick={this.handleReset} className={classes.button}>
                            Reset
                        </Button>
                    </Paper>
                )}
            </div>
        );
    }
}


export default withStyles(styles)(QuestionChoice);