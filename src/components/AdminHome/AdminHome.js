import React, { Component} from 'react';
import { connect } from 'react-redux';
import './AdminHome.css';
import { Redirect } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { withRouter } from 'react-router-dom';

export class AdminHome extends Component {
  constructor(props) {
    super(props);
  }

  handleRedirect = (event) => {
    const { name } = event.target;
    this.props.history.push(routes[name]);
  }

  render() {
    if (this.props.user === null) {
      return <Redirect to={routes.SIGN_IN} />;
    }

    return (
      <div className="Teacher_home-container">
        <section className="Teacher_board">
          <article className="Teacher_view">
            <h3>courses</h3>
            <div className="Teacher_options">
              <div className="add-btn">+</div>
              <div><img src="/eye.png"/></div>
            </div>
          </article>
          <article className="Teacher_view">
            <h3>notifications</h3>
            <div className="Teacher_options">
              <div className="add-btn">+</div>
              <div><img src="/eye.png"/></div>
            </div>
          </article>
          <article className="Teacher_view">
            <h3>tasks</h3>
            <div className="Teacher_options">
              <div className="add-btn">+</div>
              <div><img src="/eye.png"/></div>
            </div>
          </article>
          <article className="Teacher_view">
            <h3>students</h3>
            <div className="Teacher_options">
              <div className="add-btn">+</div>
              <div><img src="/eye.png"/></div>
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

export default withRouter(connect(mapStateToProps)(AdminHome));
