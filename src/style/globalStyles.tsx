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

  .d-flex {
    display: flex;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .ai-center {
    align-items: center;
  }
  .jc-center {
    justify-content: center;
  }
  .jc-between {
    justify-content: space-between;
  }

  /* scroolBar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px transparent !important;
    border-radius: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(128, 128, 128, 0.5) !important;
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #f0f0f06e;
  }
`;

export default globalStyles;
