import { theme } from "../../constant";
import styled from "styled-components";

const Style = styled.div`
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
    background: ${theme.mainBackground};
  }

  .profile {
    position: relative;
    width: 350px;
    height: 400px;
    background: url("/assets/images/user-image.jpg");
    background-size: cover;
    cursor: pointer;
    border: 12px;
    border-top-right-radius: 35px !important;
    border-radius: 6px;
  }

  .overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 12px;
    cursor: pointer;
    transition: all 1s;
    border-top-right-radius: 35px !important;
    border-radius: 6px;
  }

  .social-icons {
    display: flex;
    list-style: none;
    bottom: 10px;
    position: absolute;
    text-align: center;
    justify-content: center;
    left: 22px;
  }

  .overlay .about {
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    top: 40%;
    flex: column;
    color: ${theme.white};
  }
`;
export default Style;
