import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux'
import {createHashHistory} from 'history'
import {fetchListFAQs} from "../../../Redux/action/faqsActions";
const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    body: {
        display: 'flex',
        flexDirection : 'column'
    },
    view:{
        display: 'flex',
        justifyContent: 'flex-end'
    }
});
const hist = createHashHistory()
class ListFAQs extends React.Component {
    state = {
        expanded: null,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };
    componentDidMount(){
        this.props.dispatch(fetchListFAQs())
    }
    render() {
        const { classes } = this.props;
        const { expanded } = this.state;
        const store = this.props.faqs
        return (
            <div className={classes.root}>
                {store.fetched ? '...' :
                    store.faqs.map((faq, id) => {
                        return (
                            <ExpansionPanel key={id} expanded={expanded === 'panel1'}
                                            onChange={this.handleChange('panel1')}>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                    <Typography className={classes.heading}>{faq.title}</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails className={classes.body}>
                                    <Typography>
                                        {faq.body.length >= 40 ? faq.body.substring(0, 40) + "..." : faq.body}
                                    </Typography>
                                    <div className={classes.view}>
                                        <Button onClick={() => hist.push(`/faqs/${faq.id}`)} variant={'extendedFab'}
                                                color={'primary'}>
                                            Views <PlayArrowIcon/>
                                        </Button>
                                    </div>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        )
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        faqs : state.faqs
    }
}
export default withStyles(styles)(connect(mapStateToProps)(ListFAQs));
