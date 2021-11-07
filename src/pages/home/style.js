import { theme } from "../../constant";
import styled from "styled-components";

const Style = styled.div`
  .slick-slider {
    margin-bottom: 70px;
  }
  h3 {
    color: ${theme.titleColor};
    text-align: center;
    margin: 40px 0;
  }
  .slider {
    img {
      border-radius: 20px;
      max-width: 200px;
      height: auto;
    }
    .title {
      color: ${theme.white};
      text-align: center;
      font-size: 1.2rem;
    }
  }
`;

export default Style;
