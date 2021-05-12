import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SIGN_OUT } from '../store/actionTypes';


class Profile extends React.Component {
  static propTypes = {
    signOut: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <div className='container  mx-auto    max-w-md w-full bg-white mt-60 p-10 shadow-xl'>
          <h1 className='text-xl'>Здравсвуйте, <strong>steve.jobs@example.com</strong></h1>
          <div className='flex justify-center'>
            <button className=' p-1 px-3 bg-white-700 hover:opacity-70 active:bg-blue-800 active:opacity-none focus:outline-none rounded text-blac font-semibold text-base mt-5' onClick={this.signOut}>Выйти</button>
          </div>
        </div>
      </div>
    );
  }

  signOut = () => {
    this.props.signOut();
  };
}

const mapStateToProps = (state) => (
  {
    username: state.username
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    signOut: () => dispatch({ type: SIGN_OUT })
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
