import styled from "@emotion/styled";

const LayersWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  border-bottom: 1px solid ${({ theme }: any) => theme.colors.primary};

  .active {
    & > .title {
      background: ${({ theme }: any) => theme.colors.primary};
    }
  }
`;

export default LayersWrapper;
