import styled from "@emotion/styled";

const ContentWrapper = styled.div`
  max-width: calc(100vw - 560px);
  /* overflow: auto; */
  margin: -10px;
  padding: 10px;
  position: relative;

  .element-editor {
    &:hover,
    &.hover {
      position: relative;
      outline: 1px dashed blue;
    }
  }
`;

export default ContentWrapper;
