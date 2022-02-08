import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";


export const lightTheme = {
    accent: "#0095f6",
    borderColor: "#dbdbdb",
    bgColor: "#FAFAFA",
    fontColor: "rgb(38, 38, 38)",
    boxColor: "#ffffff",
  };
  
export const darkTheme = {
    accent: "#2c2c2c",
    fontColor: "#EFECEA",
    borderColor: "#eeeeee",
    bgColor: "#2c2c2c",
    boxColor: "#5E6162",
  };

export const GlobalStyles = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'LeferiPoint-WhiteA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-WhiteA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  input {
    all: unset;
  }
  *{
    box-sizing: border-box;
  }
  body {
      background-color: ${props => props.theme.bgColor};
      font-size: 14px;
      font-family: 'LeferiPoint-WhiteObliqueA';
      color: ${props => props.theme.color};
  }
  a{
    text-decoration: none;
  }
`;