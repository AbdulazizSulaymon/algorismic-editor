import { css } from "@emotion/react";

const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    background-color: #eff1fe;
  }

  * {
    box-sizing: border-box;
  }

  ul {
    list-style-type: none;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  div,
  a {
    font-family: "Rubik", sans-serif !important;
  }

  p,
  span,
  div,
  a {
    font-weight: 300;
  }
`;

export default globalStyles;
