import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #eee;
`;

export const Header = styled.div`
  width: 100%;
  height: 80px;
  background-color: #0b2031;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  .logotipo {
    font-family: Helvetica-Bold;
    font-size: 18px;
    color: #ffffff;
    letter-spacing: 0;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;

    img {
      margin-right: 15px;
    }
  }

  .infoUser {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    height: 100%;

    h2 {
      font-family: Helvetica-Bold;
      font-size: 16px;
      color: #ffffff;
      text-align: left;
    }

    button {
      opacity: 0.6;
      font-family: Helvetica;
      font-size: 14px;
      color: #ffffff;
      text-align: right;
      background: transparent;
      border: none;
      text-align: right;
      cursor: pointer;
      width: 80px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 40px 20px;
  text-align: left;

  .orders {
    max-width: 800px;
    margin: auto;

    h2 {
      font-family: Helvetica-Bold;
      font-size: 18px;
      color: #333333;
      text-align: left;
      margin-bottom: 15px;
    }
  }
`;

export const ListOrders = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  width: 100%;
  padding: 25px;
  background-color: #fff;
  box-shadow: 1px 1px 4px #ccc;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  .infoOrder {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h2 {
      font-family: Helvetica;
      font-size: 18px;
      color: #0b2031;
      letter-spacing: 0;
      text-align: left;
      margin-bottom: 5px;
    }

    small {
      font-family: Helvetica;
      font-size: 11px;
      color: #706e7b;
      letter-spacing: 0;
      line-height: 14px;
      text-align: left;
      margin-bottom: 5px;
    }

    span {
      font-family: Helvetica-Bold;
      font-size: 16px;
      color: #0b2031;
      letter-spacing: 0;
    }
  }

  .observation {
    font-family: Helvetica;
    font-size: 14px;
    color: #706e7b;
    letter-spacing: 0;
    text-align: left;
  }
`;

export const ListProducts = styled.ul`
  list-style: none;
  width: 100%;
  border-bottom: solid 1px #eee;
  border-top: solid 1px #eee;
  margin: 15px 0;
  padding-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
`;

export const Product = styled.li`
  width: 30%;
  border: solid 1px #eee;
  margin: 15px 15px 0 0;
  padding: 10px;
  display: flex;
  flex-direction: row;

  .dataProduct {
    display: flex;
    flex-direction: column;
    padding-left: 10px;

    .product {
      font-family: Helvetica;
      font-size: 13px;
      color: #0b2031;
      letter-spacing: 0;
      text-align: left;
    }

    .size {
      font-family: Helvetica;
      font-size: 11px;
      color: #706e7b;
      letter-spacing: 0;
      line-height: 20.77px;
      text-align: left;
    }
  }
`;
