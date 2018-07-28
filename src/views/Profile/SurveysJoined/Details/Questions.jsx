import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
class Questions extends Component {
    render() {
        const question = this.props.question
        return (
            <div>
                <Typography variant="title">
                    <QuestionAnswer/> {question.questions_title}
                </Typography>
                <Typography variant="subheading" color="secondary">
                    My answer : {question.answer}
                </Typography>
            </div>
        );
    }
}

export default Questions;