import React, { Component} from 'react';
import { connect} from 'react-redux';

class LogIn extends Component {
  constructor() {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        TEST
      </div>
    );
  }
}


// export const mapDispatchToProps = dispatch => ({

// });

export default connect(null, null)(LogIn);