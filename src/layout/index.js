import GlobalStyle from "./theme/index";
import Header from "./header";
import Footer from "./footer";
import { Fragment } from "react";

function Layout({ children }) {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
}
export default Layout;
