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
                        format="DD/MM/YYYY"
                        placeholder="10/10/2018"
                        // handle clearing outside => pass plain array if you are not controlling value outside
                        mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])}
                        value={this.props.birthday}
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