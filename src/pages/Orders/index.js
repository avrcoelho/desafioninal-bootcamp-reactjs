import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';
import socket from 'socket.io-client';
import CurrencyFormat from 'react-currency-format';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import OrdersActions from '../../stores/ducks/orders';
import UserActions from '../../stores/ducks/user';

import {
  Container,
  Header,
  Content,
  ListOrders,
  Item,
  ListProducts,
  Product,
  Error,
} from './styles';
import logo from '../../assets/images/logo.svg';

class Orders extends Component {
  static propTypes = {
    setOrdersRequest: PropTypes.func.isRequired,
    setNewOrder: PropTypes.func.isRequired,
    setDataUser: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.string]),
    orders: PropTypes.arrayOf(
      PropTypes.shape({
        order: PropTypes.number,
        total: PropTypes.number,
        observation: PropTypes.string,
        customer: PropTypes.shape({
          name: PropTypes.string,
        }),
        items: PropTypes.arrayOf(
          PropTypes.shape({
            _id: PropTypes.string,
            product: PropTypes.shape({
              _id: PropTypes.string,
              name: PropTypes.string,
            }),
            type: PropTypes.shape({
              _id: PropTypes.string,
              type: PropTypes.string,
              url: PropTypes.string,
            }),
            size: PropTypes.shape({
              _id: PropTypes.string,
              size: PropTypes.string,
            }),
          }),
        ),
      }),
    ).isRequired,
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
    error: null,
  };

  static defaultProps = {
    userData: null,
  };

  async componentDidMount() {
    this.subscribeToNewOrder();

    const { setOrdersRequest, setDataUser } = this.props;
    const data = JSON.parse(sessionStorage.getItem('@BootCamp'));

    await setDataUser(data);
    await setOrdersRequest();
  }

  subscribeToNewOrder = () => {
    const io = socket('http://localhost:3333');

    const { setNewOrder } = this.props;

    io.emit('connectOrder', 'orders');

    io.on('order', (data) => {
      setNewOrder(data);
    });
  };

  logout = () => {
    const { history } = this.props;

    sessionStorage.clear();

    history.push('/');
  };

  render() {
    const {
      orders, userData, loading, error,
    } = this.props;

    return (
      <Container>
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
        <Content>
          <div className="orders">
            <h2>Ultimos Pedidos</h2>
            {loading ? (
              <i className="fa fa-spinner fa-pulse" />
            ) : (
              <Fragment>
                {error && <Error>{error}</Error>}
                {orders
                  && orders.map(order => (
                    <ListOrders key={order.order}>
                      <Item>
                        <div className="infoOrder">
                          <h2>
                            Pedido #
                            {order.order}
                            {' '}
-
                            {' '}
                            {order.customer.name}
                          </h2>
                          <small>
                            há
                            {' '}
                            {distanceInWords(order.createdAt, new Date(), {
                              locale: pt,
                            })}
                          </small>
                          <span>
                            <CurrencyFormat
                              value={order.total}
                              displayType="text"
                              decimalSeparator=","
                              fixedDecimalScale
                              prefix="R$ "
                              renderText={value => <div>{value}</div>}
                            />
                          </span>
                        </div>
                        <ListProducts>
                          {order.items.map(item => (
                            <Product key={item._id}>
                              <img
                                src={item.type.url}
                                width={60}
                                height={60}
                                alt={item.type.type}
                              />
                              <div className="dataProduct">
                                <span className="products">
                                  {`${item.product.name} ${item.type.type}`}
                                </span>
                                <span className="size">{item.size.size}</span>
                              </div>
                            </Product>
                          ))}
                        </ListProducts>
                        <div className="observation">
                          <strong>Observações: </strong>
                          <span>{order.observation}</span>
                        </div>
                      </Item>
                    </ListOrders>
                  ))}
              </Fragment>
            )}
          </div>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.orders.orders,
  loading: state.orders.loading,
  error: state.orders.error,
  userData: state.user.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...OrdersActions,
    ...UserActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Orders);
