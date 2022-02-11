import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";


export const lightTheme = {
    primary: "#F2F2F2",
    subColor: "#BFBFBD",
    mediumColor: "#595451",
    subAccent: "#403A2F",
    accent: "#0D0D0D",
    borderColor: "#dbdbdb",
    bgColor: "#F2F2F2",
    boxColor: "#ffffff",
    headerBg: "rgb(249, 249, 249)",
  };
  
export const darkTheme = {
    primary: "#0D0D0D",
    subColor: "#403A2F",
    mediumColor: "#595451",
    subAccent: "#BFBFBD",
    accent: "#F2F2F2",
    borderColor: "#eeeeee",
    bgColor: "#0D0D0D",
    boxColor: "#5E6162",
    headerBg:"#0D0D0D"
  };

export const GlobalStyles = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'GmarketSansLight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
  font-family: 'LeferiPoint-WhiteObliqueA';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-WhiteObliqueA.woff') format('woff');
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
      font-family: 'GmarketSansLight';
      color: ${props => props.theme.color};
  }
  a{
    text-decoration: none;
  }
`;