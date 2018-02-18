import React, { Component } from 'react';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { bookmarkArticle } from '../actions/userActions'

import Typography from 'material-ui/Typography';
class Article extends Component {

  render() {
    console.log(this.props)
    return (
      <Card>
        <CardHeader

          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.article.title}
          subheader=""
        />
        <CardMedia
          style={{ height: this.props.article.image.height, width: this.props.article.image.width }}
          image={this.props.article.image.url}
          title="Contemplative Reptile"
        />
        <CardContent>

          <Typography component="p">
            {this.props.article.text}
          </Typography>
        </CardContent>
        <CardActions disableActionSpacing>

          <IconButton aria-label="Add to favorites" onClick={() => this.props.bookmarkArticle(this.props.article.id)}>
            {this.props.user.bookmarks.includes(this.props.article.id) ? <FavoriteIcon color='primary' /> : <FavoriteIcon />}
            {console.log(this.props.user.bookmarks)}

          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          {/* <IconButton

            onClick={this.handleExpandClick}

            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton> */}
        </CardActions>

        <CardContent>


        </CardContent>

      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    bookmarkArticle,

  }, dispatch)


}




export default connect(mapStateToProps, mapDispatchToProps)(Article);