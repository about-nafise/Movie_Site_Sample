import styled from "styled-components";
import { theme } from "../../constant";

const Style = styled.div`
  .backgroundColor {
    background-image: linear-gradient(
      to right,
      ${theme.movieProfileBackground} 150px,
      ${theme.movieProfileBackgroundShadow} 100%
    );
    .movieDetail {
      color: ${theme.white};
    }
  }
  img {
    width: 100%;
  }
  p {
    font-size: 1rem;
  }
`;

export default Style;
