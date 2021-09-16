import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: center;
  margin-top: 0;
  background-color: gray;
`;

export const Div = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 100px 100px;
`;

export const Opcoes = styled.div`
    position: absolute;
    height: 50px;
    width: 50px;
    font-size: 10px;
    color: white;
    margin: 100px 100px;
    padding: 50px 50px;
    border: solid rgba(0,0,0,0.7);
`;
