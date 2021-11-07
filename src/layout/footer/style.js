import styled from "styled-components";
import { theme } from "../../constant";

const Style = styled.div`
  footer {
    width: 100%;
    background-color: ${theme.secondaryBackground};
    margin: 0 auto;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    .top-footer {
      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: 2px solid #162337;
      .left-footer {
        width: 20%;
        img {
          height: auto;
          width: 80px;
          vertical-align: middle;
          border-style: none;
        }
      }
      .middle-footer {
        width: 60%;
        text-align: center;
        ul {
          display: flex;
        }
        p {
          color: #fff;
          margin: 0;
        }
      }
      .right-header {
        width: 20%;
        a {
          width: 100%;
          color: #fff;
          display: block;
          text-align: center;
          &:hover {
            color: ${theme.hover}!important;
          }
        }
      }
    }
    .bottom-footer {
      width: 100%;
      margin-top: 10px;
      p {
        text-align: center;
        color: ${theme.white};
        margin: 0;
      }
    }
  }
`;
export default Style;
