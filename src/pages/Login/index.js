import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import LoginActions from '../../stores/ducks/login';

import { Container, Error } from './styles';
import logo from '../../assets/images/logo.svg';

class Login extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    setLoginRequest: PropTypes.func.isRequired,
    success: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.string]),
    data: PropTypes.shape().isRequired,
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  componentDidUpdate(prevProps) {
    const { success, data, history } = this.props;

    console.log(this.props);

    if (prevProps.success !== success) {
      localStorage.setItem('@BootCamp', JSON.stringify(data));
      history.push('/orders');
    }
  }

  handleSubmit = async e => {
    e.preventDefault();

    const { setLoginRequest } = this.props;
    const { email, password } = this.state;

    await setLoginRequest(email, password);
  };

  render() {
    const { email, password } = this.state;
    const { loading, error } = this.props;

    return (
      <Container>
        <img src={logo} alt="logo" />
        <form action="" method="post" onSubmit={this.handleSubmit}>
          {error && <Error>{error}</Error>}
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">
            {loading ? <i className="fa fa-spinner fa-pulse" /> : 'Entrar'}
          </button>
        </form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  data: state.login.data,
  loading: state.login.loading,
  success: state.login.success,
  error: state.login.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
