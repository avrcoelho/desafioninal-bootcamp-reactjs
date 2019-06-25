import React, { Component } from 'react';
import PropTypes from 'prop-types';
import socket from 'socket.io-client';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../../components/hedaer';
import List from '../../components/list';

import UserActions from '../../stores/ducks/user';
import OrdersActions from '../../stores/ducks/orders';

import { Container } from './styles';

class Orders extends Component {
  static propTypes = {
    setNewOrder: PropTypes.func.isRequired,
    setDataUser: PropTypes.func.isRequired,
  };

  async componentDidMount() {
    this.subscribeToNewOrder();

    const { setDataUser } = this.props;
    const data = JSON.parse(sessionStorage.getItem('@BootCamp'));

    await setDataUser(data);
  }

  subscribeToNewOrder = () => {
    const io = socket('http://localhost:3333');

    const { setNewOrder } = this.props;

    io.emit('connectOrder', 'orders');

    io.on('order', (data) => {
      setNewOrder(data);
    });
  };

  render() {
    return (
      <Container>
        <Header />
        <List />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...OrdersActions,
    ...UserActions,
  },
  dispatch,
);

export default connect(
  null,
  mapDispatchToProps,
)(Orders);
