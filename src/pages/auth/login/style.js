import { theme } from "../../../constant";
import styled from "styled-components";

const Style = styled.div`
  .background {
    background: url("/assets/images/login-background.jpg") no-repeat center;
    background-size: cover;
  }
  form {
    background: ${theme.mainBackground};
    input {
      background-color: ${theme.darkBlue};
      &::placeholder {
        color: ${theme.white};
      }
    }
  }
  .logo {
    img {
      width: 100px;
      height: auto;
    }
  }
`;
export default Style;
