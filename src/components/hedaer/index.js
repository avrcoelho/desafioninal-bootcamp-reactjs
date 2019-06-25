import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

import { Header } from './styles';
import logo from '../../assets/images/logo.svg';

class Hedaer extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
    userData: PropTypes.oneOfType([
      PropTypes.oneOf([null]),
      PropTypes.shape({
        name: PropTypes.string,
      }),
    ]),
  };

  static defaultProps = {
    userData: null,
  };

  logout = () => {
    const { history } = this.props;

    sessionStorage.clear();

    history.push('/');
  };

  render() {
    const { userData } = this.props;

    return (
      <Header>
        <div className="logotipo">
          <img src={logo} width={32} alt="logo" />
          <h2>Pizzaria Dom Juan</h2>
        </div>
        <div className="infoUser">
          <h2>{userData && userData.name}</h2>
          <button type="button" onClick={this.logout}>
            Sair do app
          </button>
        </div>
      </Header>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.user.data,
});

export default withRouter(connect(mapStateToProps)(Hedaer));
