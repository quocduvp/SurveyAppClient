import React, {Component} from 'react';
import {Link} from 'react-router-dom'
//
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SelectField from "./Register/SelectField";
import DatePick from "./Register/DatePick";
import qs from "qs";
import axios from "axios/index";
import {post_register} from "../../API/URL";
import swal from 'sweetalert2'
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            card_id: "",
            username: "",
            password: "",
            password2: "",
            section: "Student",
            date_join: new Date()
        }
        this.ChangeForm = this.ChangeForm.bind(this)
        this.SubmitForm = this.SubmitForm.bind(this)
    }

    ChangeForm(e) {
        e.preventDefault()
        let value = e.target.value
        let name = e.target.name
        this.setState({
            [name]: value
        })
    }

    handleDateChange = (date) => {
        let months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'agu', 'sep', 'oct', 'nov', 'dec'];
        let day = date.getDate();
        let year = date.getFullYear();
        let month = months[date.getMonth()];
        let date_join = day + "-" + month + "-" + year
        this.setState({
            date_join: date_join
        })
    }

    SubmitForm(e) {
        e.preventDefault()
        const settings = {
            "async": true,
            "crossDomain": true,
            "url": post_register,
            "method": "POST",
            "headers": {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            "data": qs.stringify(this.state)
        }
        axios(settings).then(r => {
            swal({
                text: r.data.message,
                type: 'success',
                title: 'Success'
            })
        }).catch(err => {
            swal({
                text: 'Register fails',
                type: 'error',
                title: 'Error'
            })
        })
    }

    //check password
    CheckPassword() {
        // const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        const UpperCase = /(?=.*?[A-Z])/
        const LowerCase = /(?=.*?[a-z])/
        const number = /(?=.*?[0-9])/
        const specialChar = /(?=.*?[#?!@$%^&*-])/
        const len8 = /.{8,}/
        if (!UpperCase.test(this.state.password)) {
            return (<Typography color={'error'} variant={"subheading"}>Least one upper case</Typography>)
        } else if (!LowerCase.test(this.state.password)) {
            return (<Typography color={'error'} variant={"subheading"}>Least one lower case</Typography>)
        } else if (!number.test(this.state.password)) {
            return (<Typography color={'error'} variant={"subheading"}>Least one digit</Typography>)
        } else if (!specialChar.test(this.state.password)) {
            return (<Typography color={'error'} variant={"subheading"}>Least one special character</Typography>)
        } else if (!len8.test(this.state.password)) {
            return (<Typography color={'error'} variant={"subheading"}>Minimum eight in length</Typography>)
        } else {
            return (<Typography color={'primary'} variant={"subheading"}>Password pass</Typography>)
        }
    }

    //check confirm password
    CheckConfirmPassword() {
        if (this.state.password === this.state.password2) {
            return (<Typography color={'primary'} variant={"subheading"}>Confirm password pass</Typography>)
        } else {
            return (<Typography color={'error'} variant={"subheading"}>Passwords are not the same</Typography>)
        }
    }

    render() {
        const {classes} = this.props
        const value = this.state
        return (
            <Grid container className={classes.container}>
                <Grid item xs={12}>
                    <Grid container justify={'center'} alignItems={'center'} className={classes.root}>
                        <Grid item xs={12} md={6} sm={8}>
                            <Card className={classes.box}>
                                <CardContent style={{backgroundColor: '#2E7D32'}}>
                                    <Typography style={{color: '#fff'}} variant={'headline'}>
                                        Register your account
                                    </Typography>
                                </CardContent>
                                <form onSubmit={this.SubmitForm} autoComplete={'off'} className={classes.form}>
                                    <TextField
                                        id="card_id"
                                        label="Card ID"
                                        name="card_id"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={this.ChangeForm}
                                        value={value.card_id}
                                        placeholder="Placeholder"
                                        helperText="Full width!"
                                        fullWidth
                                        margin="normal"
                                    />
                                    <TextField
                                        id="Username"
                                        label="Username"
                                        name="username"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={this.ChangeForm}
                                        value={value.username}
                                        placeholder="Placeholder"
                                        helperText="Full width!"
                                        fullWidth
                                        margin="normal"
                                    />

                                    <TextField
                                        id="Password"
                                        label="Password"
                                        type={'password'}
                                        name="password"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={this.ChangeForm}
                                        value={value.password}
                                        placeholder="Placeholder"
                                        fullWidth
                                        margin="normal"
                                    />
                                    {value.password.length > 0 ? this.CheckPassword() : ""}

                                    <TextField
                                        id="ConfirmPassword"
                                        label="Confirm Password"
                                        type={'password'}
                                        name="password2"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={this.ChangeForm}
                                        value={value.password2}
                                        placeholder="Placeholder"
                                        fullWidth
                                        margin="normal"
                                    />
                                    {value.password2.length > 0 ? this.CheckConfirmPassword() : ""}

                                    <SelectField changeSection={this.ChangeForm} section={value.section}/>
                                    <DatePick changeDate={this.handleDateChange} dateJoin={value.date_join}/>
                                    <div className={classes.buttonGroup}>
                                        <Button type={'submit'} variant="contained" color="primary"
                                                style={{backgroundColor: '#4CAF50'}}>
                                            Register
                                        </Button>
                                    </div>
                                    <Typography variant={'subheading'} style={{textAlign: 'center'}}>
                                        Have account? <Link replace className={classes.link} to={'/Login'}>Go to
                                        login</Link>
                                    </Typography>
                                </form>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

const styles = theme => ({
    container: {
        overflow: 'auto',
        backgroundColor: '#76b852',
        position: 'relative',
        width: '100%',
        height: '100vh',
        padding: '16px 16px'

    },
    root: {
        paddingTop: '16px',
        paddingBottom: '16px'
    },
    box: {
        boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)'
    },
    form: {
        padding: '16px',

    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '16px',
        marginBottom: '8px'
    },
    link: {
        textDecoration: 'none',
        color: '283F1D'
    }
})
export default withStyles(styles)(Register);