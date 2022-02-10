import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";


export const lightTheme = {
    primary: "#F2F2F2",
    subColor: "#F2D541",
    mediumColor: "#6B7FF2",
    subAccent: "#7E8FF2",
    accent: "#D9A7D5",
    borderColor: "#dbdbdb",
    bgColor: "#F2F2F2",
    fontColor: "rgb(38, 38, 38)",
    boxColor: "#ffffff",
    headerBg:"#7E8FF2"
  };
  
export const darkTheme = {
    primary: "#0D0D0D",
    subColor: "#593528",
    mediumColor: "#8C6046",
    subAccent: "#BF9B7A",
    accent: "#F2F2EB",
    fontColor: "#F2F2EB",
    borderColor: "#eeeeee",
    bgColor: "#0D0D0D",
    boxColor: "#5E6162",
    headerBg:"#BF9B7A"
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