import styled from 'styled-components';

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
