import React, { Component} from 'react';
import { connect } from 'react-redux';
import './Login.css';
import * as API from '../../apiCalls/apiCalls';

export class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userbase: 'student',
      email: '',
      password: ''
    };
  }

  setUserbase = (userbase) => {
    this.setState({userbase});
  }

  onSubmit = async (event) => {
    event.preventDefault();
    const creds = {
      email: this.state.email, 
      password: this.state.password
    }
    try {
      const response = await API.authUser(creds);
      const user = {
        id: response.id,
        name: response.firstName + response.lastName
      }
      localStorage.setItem('id_token', user.id_token)
      localStorage.setItem('id_token', user.access_token)
    } catch (error) {
      throw error;
    }

    this.setState({
      email: '',
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

    const { email, password } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <div className='LogIn'>
        {tabs}
        <form onSubmit={this.onSubmit} className='signIn authentication'>
          <input
            className='LogIn__email'
            value={email}
            onChange={event => this.setState({email: event.target.value})}
            type="text"
            placeholder="Email Address"
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

export default connect(null, null)(LogIn);