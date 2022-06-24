import styled from "styled-components";

export namespace FooterStyles {
    export const Wrap = styled('div')`
      width: 100%;
      height: 300px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 64px;

    `
    export const P = styled('p')`
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */
      /* Text/secondary */
      color: rgba(0, 0, 0, 0.6);

    `
    export const Media = styled('ul')`
      display: flex;
      flex-direction: row;
    `
    export const MediaItem = styled('li')`
      padding: 10px;
    `
    export const NoteList = styled('ul')`
      margin-right: 80px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 160%;
      /* identical to box height, or 26px */


      /* Grey/4 */

      color: #696969;

    `
    export const NoteItem = styled('li')`
      padding: 10px;
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 160%;
      color: #696969;

      &:first-child {
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 160%;
        /* identical to box height, or 26px */


        /* Grey/10 */

        color: #000000;
      }

    `
}