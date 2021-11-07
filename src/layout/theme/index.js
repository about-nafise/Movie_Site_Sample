import { theme } from "../../constant";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* @font-face {
  font-family: 'inter';
  src: url('/assets/fonts/inter.woff2') format('woff2');
  font-weight: normal;
}
@font-face {
  font-family: 'rubik';
  src: url('/assets/fonts/rubik.woff2') format('woff2');
  font-weight: 900;
} */

body,html{
  background: ${theme.mainBackground};
  overflow-x:hidden;
  padding-right: 0!important;
  padding-left: 0!important;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a{
  text-decoration: none;
  color: ${theme.white};
  &:hover{
  h3 , p {
      color: ${theme.hover}!important;
    }
  }
}
`;

export default GlobalStyle;
