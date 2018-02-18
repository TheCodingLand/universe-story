import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { nextArticle, previousArticle } from '../actions/userActions'
import articles from './articles'

import { bindActionCreators } from "redux"
import { connect } from "react-redux"

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    loginButton: {
        align: 'right'
    }
};

const classes = styles
class Header extends React.Component {



    render() {
        return <div style={{}}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" style={{ borderRight: '0.1em solid black', padding: '0.5em' }} className={classes.flex}>
                        UNIVERSE-STORY
          </Typography>

                    <Button
                        disabled={this.props.user.progression === 0}
                        onClick={this.props.previousArticle}

                    >
                        Back
                    </Button>
                    <Button
                        variant="raised"
                        color="primary"
                        onClick={this.props.nextArticle}

                    >

                        {this.props.user.progression === articles.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                    <Button className="loginButton" color="inherit">Login</Button>
                </Toolbar>

            </AppBar>



        </div >
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        nextArticle,
        previousArticle,
    }, dispatch)


}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Header))