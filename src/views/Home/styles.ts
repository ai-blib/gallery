import styled from "styled-components";

export namespace HomeStyles {
    export const Wrap = styled('div')`
      min-width: 1200px;
      height: 100%;
      background: ${({theme}) => theme.subBackground};

    `
    export  const Main = styled('main')`
      margin-top: 64px;
      width: 100%;
      height: 100%;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
`

}

