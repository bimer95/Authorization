import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import Profile from './profile';

class Login extends React.Component {
  static propTypes = {
    isAuthorized: PropTypes.bool,
    logIn: PropTypes.func.isRequired,
    error: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',

    };
  }

  render() {
    const { isAuthorized } = this.props;

    if (isAuthorized) {
      return <Profile />;
    }

    const { username, password, rememberPassword } = this.state;
    const { error } = this.props;




    return (
      <div className="container  mx-auto    max-w-md w-full bg-white mt-60 p-19 shadow-xl ">
        <form id='login-form' onSubmit={this.handleSubmit}>

          <div className='border-2 border-red-300 rounded-lg color-red-500 bg-red-100 p-2 mb-2 ' hidden={!error}>


            {error}
          </div>
          <label className="mt-1">Логин</label>
          <br />
          <input className="w-full mb-2 bg-gray-100 mt-3 placeholder-gray-500 focus:bg-gray-100 outline-none rounded" required value={username} onChange={this.onChangeUsername} />
          <br />
          <label className="mb-3 " >Пароль</label>
          <br />
          <input className="w-full bg-gray-100 mt-3 placeholder-gray-500 focus:bg-gray-100 outline-none rounded" required type="password" value={password} onChange={this.onChangePassword} />
          <br />
          <input type="checkbox" className="transform scale-125 mt-3 m-1" />&nbsp;
                            <label>Запомнить пароль</label>
          <button className="w-full p-2 px-3 bg-blue-700 hover:opacity-70 active:bg-blue-800 active:opacity-none focus:outline-none rounded text-white font-semibold text-sm mt-5" onclick={this.disabled = true}>Войти</button>

        </form>
      </div>
    );

  }

  onChangeUsername = (event) => {
    const { target: { value } } = event;

    this.setState({ username: value });
  }

  onChangePassword = (event) => {
    const { target: { value } } = event;

    this.setState({ password: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;

    this.props.logIn(username, password);
  }
}

const mapStateToProps = (state) => (
  {
    isAuthorized: Boolean(state.username),
    error: state.errorMessage
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    logIn: (username, password) => dispatch({ type: 'LOG_IN', payload: { username, password } }),
  }
);


export default connect(mapStateToProps, mapDispatchToProps)(Login);
