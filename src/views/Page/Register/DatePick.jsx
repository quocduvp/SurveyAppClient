import React, { Fragment, PureComponent } from 'react';
import withStyles from '@material-ui/core/styles/withStyles'
import { DatePicker } from 'material-ui-pickers';

class DatePick extends PureComponent {
    state = {
        selectedDate: new Date(),
    }

    handleDateChange = (date) => {
        this.setState({ selectedDate: date });
    }

    render() {
        const { selectedDate } = this.state;
        const {classes} = this.props
        console.log(this.state)
        return (
            <Fragment>
                <div className={classes.date_pick}>
                    <DatePicker
                        className={classes.dateField}
                        keyboard
                        label="Date join"
                        format="DD/MM/YYYY"
                        placeholder="10/10/2018"
                        // handle clearing outside => pass plain array if you are not controlling value outside
                        mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])}
                        value={this.props.dateJoin}
                        onChange={this.props.changeDate}
                        name = "date_join"
                        disableOpenOnEnter
                        animateYearScrolling={false}
                    />
                </div>
            </Fragment>
        );
    }
}

const styles = theme => ({
    date_pick : {
        marginTop : '16px',
        marginBottom : '8px'
    },
    dateField : {
        width : '100%'
    }
})
export default withStyles(styles)(DatePick)