import { theme } from "../../constant";
import styled from "styled-components";

const Style = styled.div`
  header {
    .navbar-brand {
      img {
        width: 100px;
        height: auto;
      }
    }
    .desktopButton {
      background-color: ${theme.darkBlue};
    }
    //  mobile header
    .mobileHeader {
      font-size: 1rem;
      .mobileSearch {
        svg {
          margin: 0 auto;
          display: block;
        }
      }
      align-items: center;
      width: 100%;
      ul {
        li {
          a {
            width: 100%;
            color: ${theme.white};
            display: block;
            text-align: center;
          }
        }
        img {
          width: 70px;
          height: auto;
        }
      }
    }
    .offcanvas#leftNavbar {
      max-width: 270px;
    }
  }
  .modal-body {
    background-color: ${theme.darkBlue};
    input {
      background-color: ${theme.darkBlue};
    }
  }
`;
export default Style;
