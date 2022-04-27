import styled from "@emotion/styled";

const EditorWrapper = styled.div`
  header {
    display: flex;
    align-items: center;
    padding: 8px 20px;
    box-shadow: 0 10px 20px 0 #00000022;

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
    }
    main {
      flex: 1;
      padding: 20px;
      min-height: calc(100vh - 80px);
      border: 1px solid #c6cae2;
    }
    aside {
      width: 260px;
      padding: 20px;
    }
  }

  footer {
  }
`;

export default EditorWrapper;
