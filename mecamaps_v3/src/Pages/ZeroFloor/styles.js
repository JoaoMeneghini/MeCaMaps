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
    width: 450px;
    height: 450px;
    margin: 20px auto;
    position: relative;
`;

const theme = {
    gray: {
      default: "#bbbbbb",
      hover: "#aaaaaa"
    },
    pink: {
      default: "#e91e63",
      hover: "#ad1457"
    }
  };

export const Button = styled.button`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => theme[props.theme].default};
    color: white;
    height: 50px;
    width: 300px;
    padding: 5px 15px;
    border-radius: 5px;
    outline: 0;
    margin: 20px auto;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
        background-color: ${(props) => theme[props.theme].hover};
    }
    &:disabled {
        cursor: default;
        opacity: 0.7;
    }
`;

Button.defaultProps = {
    theme: "gray"
  };

export const CamButton = styled.button`
    position: absolute;
    border-radius: 5px;
    height: 50px;
    width: 50px;
    left: 12px;
    color: white;
    background-color: ${(props) => theme[props.theme].default};
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
        background-color: ${(props) => theme[props.theme].hover};
    }
`
CamButton.defaultProps = {
    theme: "gray"
  };

export const Title = styled.h1`
    display: flex;
    justify-content: center;
`

export const SubTitle = styled.h2`
    display: flex;
    justify-content: center;
    color: #aaaaaa;
`
export const CamImg = styled.img`
    position: relative;
    height: 70%;
    width: 100%;
    margin: 8px 0;
`
export const MainMenu = styled.div`
    position: relative;
    left: 0px;
`;

export const Floor = styled.div`
    position: relative;
    right: 0px;
`;

export const Map = styled.div`
    width: 400px;
    height: 300px;
    border: 5px transparent;
    position: absolute;
    margin-top: 50px;
`;

const m1 = 0.304;
const m2 = 0.515;
const h = 800*m1;
const c = 600*m2;

export const Floor_img = styled.img`
    width: ${c}px;
    height: ${h}px;
    position: absolute;
    z-index: 0;
    left: 248px;
    top: 180px;
`;

/*export const Floor_img = styled.img`
    width: ${c}px;
    height: ${h}px;
    position: absolute;
    z-index: 0;
`;*/
