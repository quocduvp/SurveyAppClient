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
//redux
import {connect} from "react-redux";
import {loginAccount} from "../../Redux/action/accountActions";
import ReportAccount from "./ReportAccount";

class Login extends Component {
    state = {
        username: "",
        password: "",
        grant_type: "password",
    }
    Submit(e){
        e.preventDefault()
        this.props.dispatch(loginAccount(this.state))
    }
    Change(e){
        e.preventDefault()
        let target = e.target
        let name = target.name
        let value = target.value
        this.setState({
            [name] : value
        })
    }
    render() {
        const {classes} = this.props
        const state = this.state
        return (
            <Grid container>
                <Grid item xs={12}>
                    <Grid container justify={'center'} alignItems={'center'} className={classes.root}>
                        <Grid item xs={12} md={6} sm={8}>
                            <Card className={classes.box}>
                                <CardContent style={{backgroundColor: '#2E7D32'}}>
                                    <Typography style={{color: '#fff'}} variant={'headline'}>
                                        Login to app
                                    </Typography>
                                </CardContent>
                                <form onSubmit={this.Submit.bind(this)} autoComplete={'off'} className={classes.form}>
                                    <TextField
                                        id="full-width"
                                        label="Username"
                                        name={"username"}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={this.Change.bind(this)}
                                        value={state.username}
                                        placeholder="username"
                                        fullWidth
                                        margin="normal"
                                    />
                                    <TextField
                                        id="password"
                                        label="Password"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={this.Change.bind(this)}
                                        value={state.password}
                                        name={"password"}
                                        type={'password'}
                                        placeholder="password"
                                        fullWidth
                                        margin="normal"
                                    />
                                    <div className={classes.buttonGroup}>
                                        <Button type={'submit'} variant="contained" color="primary"
                                                style={{backgroundColor: '#4CAF50'}}>
                                            Login
                                        </Button>
                                    </div>
                                    <Typography variant={'subheading'} style={{textAlign: 'center'}}>
                                        Not registered? <Link replace className={classes.link} to={'/Register'}>Create new
                                        account</Link>
                                    </Typography>
                                    <div className={classes.forgotPass}>
                                        <ReportAccount/>
                                    </div>
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
    root: {
        backgroundColor: '#76b852',
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        padding: '0px 16px'
    },
    form: {
        padding: '16px'
    },
    box : {
        boxShadow : '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)'
    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'flex-end',
        paddingTop : '16px',
        paddingBottom : '16px'
    },
    link: {
        textDecoration: 'none',
        color: '283F1D'
    },
    forgotPass : {
        display: 'flex',
        justifyContent :'center',
        alignItems: 'center'
    }
})
const mapStateToProps = (state) => {
    return {
        account : state.account
    }
}
export default connect(mapStateToProps)(withStyles(styles)(Login));