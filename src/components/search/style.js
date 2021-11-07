import styled from "styled-components";
import { theme } from "../../constant";

const Style = styled.div`
  .searchDesktop {
    background-color: ${theme.darkBlue};
  }
  .searchIcon {
    position: absolute;
    top: 50%;
    right: 40px;
    transform: translateY(-50%);
  }
  .searchBox {
    position: absolute;
    top: 40px;
    left: 0;
    max-height: 300px;
    overflow-y: scroll;
    z-index: 10;
    background-color: ${theme.darkBlue};
    .searchImg {
      max-width: 70px;
    }
    p {
      font-size: 1rem;
      color: ${theme.white};
    }
  }
  h5 {
    font-size: 1rem;
    color: #fff;
  }
`;
export default Style;
