import React, { Component} from 'react';
import { connect} from 'react-redux';
import './Login.css';

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className='LogIn'>
        TEST
      </div>
    );
  }
}


// export const mapDispatchToProps = dispatch => ({

// });

export default connect(null, null)(LogIn);