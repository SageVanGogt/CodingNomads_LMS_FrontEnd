import React, { Component} from 'react';
import { connect } from 'react-redux';
import './AdminHome.css';
import { Redirect } from 'react-router-dom';
import * as routes from '../../constants/routes';

export class AdminHome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.user === null) {
      return <Redirect to={routes.SIGN_IN} />;
    }

    return (
      <div className="Teacher_home">
        <section className="Teacher_board">
          <article className="Teacher_view">
            <h3>courses</h3>
            <div className="Teacher_options">
              <div>add</div>
              <div>view</div>
            </div>
          </article>
          <article className="Teacher_view">
            <h3>notifications</h3>
            <div className="Teacher_options">
              <div>add</div>
              <div>view</div>
            </div>
          </article>
          <article className="Teacher_view">
            <h3>tasks</h3>
            <div className="Teacher_options">
              <div>add</div>
              <div>view</div>
            </div>
          </article>
          <article className="Teacher_view">
            <h3>students</h3>
            <div className="Teacher_options">
              <div>add</div>
              <div>view</div>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps)(AdminHome);
