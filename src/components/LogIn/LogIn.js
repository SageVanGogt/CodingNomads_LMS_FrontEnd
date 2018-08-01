import React, { Component} from 'react';
import { connect } from 'react-redux';
import './Login.css';
import * as API from '../../apiCalls/apiCalls';
import { signIn } from './../../actions/signin';
import PropTypes from 'prop-types';

export class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userbase: 'student',
      username: '',
      password: ''
    };
  }

  setUserbase = (userbase) => {
    this.setState({userbase});
  }

  onSubmit = async (event) => {
    event.preventDefault();
    const creds = {
      username: this.state.username, 
      password: this.state.password
    };

    try {
      const response = await API.authUser(creds);
      const user = {
        id: response.id,
        name: response.firstName + response.lastName
      };

      localStorage.setItem('id_token', response.id_token);
      localStorage.setItem('access_token', response.access_token);
      this.props.signIn(user);
    } catch (error) {
      throw error;
    }

    this.setState({
      username: '',
      password: ''
    });
  }

  render() {
    const tabs = this.state.userbase === 'student' ? 
      <div className='LogIn_tabs'>
        <div 
          className='LogIn_tab LogIn_tab__active' 
          onClick={() => this.setUserbase('student')}
        >
          <span>Student</span>
        </div>
        <div 
          className='LogIn_tab' 
          onClick={() => this.setUserbase('admin')}
        >
          <span>Admin</span>
        </div>
      </div>
      :
      <div className='LogIn_tabs'>
        <div 
          className='LogIn_tab' 
          onClick={() => this.setUserbase('student')}
        >
          <span>Student</span>
        </div>
        <div 
          className='LogIn_tab LogIn_tab__active'
          onClick={() => this.setUserbase('admin')}
        >
          <span>Admin</span>
        </div>
      </div>;

    const { username, password } = this.state;

    const isInvalid = password === '' || username === '';

    return (
      <div className='LogIn'>
        {tabs}
        <form onSubmit={this.onSubmit} className='signIn authentication'>
          <input
            className='LogIn__username'
            value={username}
            onChange={event => this.setState({username: event.target.value})}
            type="text"
            placeholder="Username"
          />
          <input
            className='LogIn__password'
            value={password}
            onChange={event => this.setState({ password: event.target.value})}
            type="password"
            placeholder="Password"
          />
          <button disabled={isInvalid} type="submit">
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signIn: (user) => dispatch(signIn(user))
});

LogIn.propTypes = {
  signIn: PropTypes.func
};

export default connect(null, mapDispatchToProps)(LogIn);
