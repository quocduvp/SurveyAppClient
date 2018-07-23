import React, {Component} from 'react';
import {fetchDetailsFAQs} from "../../Redux/action/faqsActions";
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import {connect} from 'react-redux'
class FAQsDetails extends Component {
    componentDidMount(){
        this.props.dispatch(fetchDetailsFAQs(this.props.match.params.id))
    }
    render() {
        const store = this.props.faqs
        return (
            <div>
                {store.fetched ? '...' :
                    <Paper style={{padding:'16px'}}>
                        <Typography variant={'headline'}>
                            {store.details.title}
                        </Typography>
                        <Typography variant={'subheading'}>
                            {store.details.body}
                        </Typography>
                        <Typography style={{display:'flex',justifyContent:'flex-end', fontSize:'12px'}}>
                            Date create: {store.details.create_at.substring(0,10)}
                        </Typography>
                    </Paper>
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
export default connect(mapStateToProps)(FAQsDetails);