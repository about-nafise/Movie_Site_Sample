import { theme } from "../../../constant";
import styled from "styled-components";

const Style = styled.div`
  .movie-image img {
    width: 160px;
    border-radius: 6px;
  }
  .movie-content {
    position: relative;
    display: block;
    margin-top: 10px;
    width: 100%;
    color: ${theme.white};
    h3 {
      font-size: 1em;
    }
  }
  .pagination {
    height: 40px;
    border: 1px solid #edf1f7;
    width: fit-content;
    border-radius: 10px;
    margin: 0 auto;
    background-color: ${theme.secondaryBackground};
    color: #fff;
    .active {
      background-color: ${theme.titleColor};
      color: ${theme.white};
    }
    li {
      &:not(:last-child) {
        border-left: 1px solid #edf1f7;
      }
      display: flex;
      align-items: center;
      &.previous a {
        border-radius: 10px 0 0 10px;
        min-width: 71px;
      }
      &.next a {
        border-radius: 0 10px 10px 0;
        min-width: 65px;
      }
      a {
        cursor: pointer;
        padding: 10px 15px;
        &:hover {
          background-color: ${theme.hover} !important;
          color: ${theme.white} !important;
        }
      }
    }
  }
`;
export default Style;
