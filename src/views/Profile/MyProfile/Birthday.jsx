import React, { Fragment, PureComponent } from 'react';
import withStyles from '@material-ui/core/styles/withStyles'
import { DatePicker } from 'material-ui-pickers';

class Birthday extends PureComponent {
    render() {
        const {classes} = this.props
        return (
            <Fragment>
                <div className={classes.date_pick}>
                    <DatePicker
                        className={classes.dateField}
                        keyboard
                        label="Date join"
                        format="MM/DD/YYYY"
                        placeholder="10/10/2018"
                        helperText="MM/DD/YYYY"
                        // handle clearing outside => pass plain array if you are not controlling value outside
                        mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])}
                        value={new Date(this.props.birthday) >= new Date('01-01-1940') 
                            ? this.props.birthday : '01-01-2000'}
                        onChange={this.props.change}
                        name = "birthday"
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
export default withStyles(styles)(Birthday)