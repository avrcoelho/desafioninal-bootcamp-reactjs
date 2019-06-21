import styled from 'styled-components';

import bgImage from '../../assets/images/fundo.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, transparent 0%, #000 100%), url(${bgImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  img {
    width: 70px;
    margin-bottom: 15px;
  }

  form {
    max-width: 300px;
    height: auto;

    input {
      width: 100%;
      height: 45px;
      border: solid 1px #eee;
      border-radius: 5px;
      margin: 5px 0;
      padding: 8px;
      font-size: 14px;
    }
    button {
      width: 100%;
      height: 45px;
      border-radius: 5px;
      border: none;
      margin: 5px 0;
      font-size: 14px;
      background: #fe3b00;
      color: #fff;
      cursor: pointer;
    }
  }
`;

export const Error = styled.div`
  width: 100%;
  margin: 10px 0;
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;
