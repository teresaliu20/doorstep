import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import swal from 'sweetalert';


class Door extends React.Component {
  constructor(props) {
    super(props);
  }
  sendEmail() {
    axios.post('/mail/send-email', {
      user: this.props.user,
      community: this.props.com
    })
    .then(response => {
      console.log("REPOS", response.data);
      if (response.data.success) {
        console.log("SUCCESS FRONT END SENDING MAIL");
        swal({
          title: "Email sent!",
          text: "The owner of the community will be notified of your interest.",
          type: "success"
        })
      } else {
        console.log("FAILURE FRONT END SENDING MAIL", response.data.error);
        swal({
          title: "Error sending email :(",
          text: "Something went wrong! Try again later.",
          type: "error"
        })
      }
    });
  }
  render() {
    const profileUrl = '/community/' + this.props.com._id;
    return (
      <div className="door">
        <div className="door-inner"></div>
        <div className="door-info">
          <h2>{this.props.com.name ? this.props.com.name :  '7th Street Market'}</h2>
          <p>{this.props.com.description ? this.props.com.description : 'Lorem ipsum something something at 7th street yay'}</p>
        </div>
        <div className="doorknob"></div>
        {
          this.props.isMember ?
          <Link to={profileUrl}><div className="button join-button">View Market</div></Link>
          :
          <div className="button ask-button" onClick={() => this.sendEmail()}>Ask To Join</div>
        }
      </div>
    );
  }
}

Door.propTypes = {
  user: PropTypes.object,
  com: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.user,
    com: ownProps.com
  };
};

export default connect(
  mapStateToProps
)(Door);
