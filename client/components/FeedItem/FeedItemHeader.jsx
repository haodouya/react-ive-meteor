/*global User */

this.FeedItemHeader = React.createClass({
  propTypes: {
    userName: React.PropTypes.string,
    ownerId: React.PropTypes.string,
    destroyPost: React.PropTypes.func,
    createdAt: React.PropTypes.instanceOf(Date),
  },

  formatDate() {
    var date = this.props.createdAt;
    return date && this.props.createdAt.toDateString();
  },

  handleDestroyPost() {
    // calls Model instance #destroy
    this.props.destroyPost();
  },

  render() {
    var hasDeleteBtn = this.props.ownerId === User.id();
    return (
      <div className="feed-item__header">
        <div className="avatar" />

        <div className='name-date'>
          <div className="name">{this.props.userName}</div>
          <div className="date">{this.formatDate()}</div>
        </div>

        { hasDeleteBtn &&
          <div className="destroy" onClick={ this.handleDestroyPost }>
              Delete Post
          </div>
        }
      </div>
    );
  },

  renderDeleteButton() {
    if (this.props.ownerId === User.id()) {
      return (
        <div className="destroy" onClick={ this.handleDestroyPost }>
          Delete Post
        </div>
      );
    }
  }
});
