import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';
import CurrencyFormat from 'react-currency-format';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import OrdersActions from '../../stores/ducks/orders';

import {
  Content, ListOrders, Item, ListProducts, Product, Error,
} from './styles';

class List extends Component {
  static propTypes = {
    setOrdersRequest: PropTypes.func.isRequired,
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
  };

  static defaultProps = {
    error: null,
  };

  async componentDidMount() {
    const { setOrdersRequest } = this.props;

    await setOrdersRequest();
  }

  render() {
    const { orders, loading, error } = this.props;

    return (
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
                            <img src={item.type.url} width={60} height={60} alt={item.type.type} />
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
    );
  }
}

const mapStateToProps = state => ({
  orders: state.orders.orders,
  loading: state.orders.loading,
  error: state.orders.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(OrdersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
