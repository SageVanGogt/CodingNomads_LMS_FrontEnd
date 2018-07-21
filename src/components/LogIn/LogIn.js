import React, { Component} from 'react';
import { connect } from 'react-redux';
import './Login.css';

class LogIn extends Component {
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

    return (
      <div className='LogIn'>
        {tabs}
        <form action=""></form>
      </div>
    );
  }
}


// export const mapDispatchToProps = dispatch => ({

// });

export default connect(null, null)(LogIn);