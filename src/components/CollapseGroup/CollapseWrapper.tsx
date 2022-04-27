import styled from "@emotion/styled";

const CollapseWrapper = styled.div`
  transition: 0.2s;

  .title {
    font-weight: 500;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      transform: translateX(2px);
    }

    svg {
      transition: 0.2s;
    }
  }

  &.show {
    .title {
      svg {
        transform: rotateZ(90deg) !important;
      }
    }
  }
`;

export default CollapseWrapper;
