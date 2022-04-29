import styled from "@emotion/styled";

const EditorWrapper = styled.div`
  header {
    display: flex;
    align-items: center;
    padding: 8px 20px;
    box-shadow: 0 10px 20px 0 #00000022;
    position: sticky;
    top: 0;
    z-index: 999;
    ${({ theme }: { theme: any }) => `background-color: ${theme.colors.light};`}

    .logo {
      height: 30px;
      margin-right: 14px;
    }
    .title {
      font-size: 20px !important ;
      font-weight: 700;
    }
  }

  section.panel {
    display: flex;
    max-width: 2000px;
    margin: auto;

    section.components {
      width: 260px;
      padding: 20px;
      position: sticky;
      top: 0;
      max-height: calc(100vh - 80px);
      overflow: auto;
    }
    main {
      flex: 1;
      padding: 20px;
      position: sticky;
      top: 0;
      max-height: calc(100vh - 80px);
      border-left: 1px solid #c6cae2;
      border-right: 1px solid #c6cae2;
      overflow: auto;
    }
    aside {
      width: 260px;
      padding: 20px;
      position: sticky;
      top: 0;
      max-height: calc(100vh - 80px);
      overflow: auto;
    }
  }

  footer {
  }
`;

export default EditorWrapper;
