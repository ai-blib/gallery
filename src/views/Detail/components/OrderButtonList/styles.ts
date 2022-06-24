import styled from "styled-components";

export namespace OrderButtonListStyles {
    export const ButtonListWrap = styled('div')`
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 10px;
      box-sizing: border-box;
      background: #F9F9F9;
      /* Grey/2 */

      border: 1px solid #EFEFEF;
    `
    export const ButtonWrap = styled('div')`
      max-width: 1200px;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    `
}
