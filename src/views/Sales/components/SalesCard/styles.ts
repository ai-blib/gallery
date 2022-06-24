import styled from "styled-components";

export namespace SalesCardStyles {
    export const CollectionCard = styled.div`
      width: 280px;
      height: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: rgba(255, 255, 255, 0.5);
      /* Grey/3 */

      border: 1px solid #d3d3d3;
      box-sizing: border-box;
      /* blur */

      backdrop-filter: blur(40px);
      /* Note: backdrop-filter has minimal browser support */

      border-radius: 20px;

      padding: 12px;
      overflow: hidden;
      margin: 10px;
    `;
    export const CollectionBackground = styled.div<{ src: string | undefined }>`
      display: flex;
      flex-direction: column;
      justify-content: end;
      align-items: center;
      width: 256px;
      height: 124px;
      background: url(${({src}) => src || "/assets/stone.jpg"}) no-repeat center;
      background-size: cover;
      border-radius: 10px;
    `;
    export const TitleWrap = styled.div`

      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 160%;
      /* identical to box height, or 32px */


      /* Text/main */

      color: rgba(0, 0, 0, 0.88);
    `;
    export const Desc = styled('div')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 160%;
      /* or 19px */

      text-align: center;

      /* Grey/4 */

      color: #696969;

    `
    export const ViewBtn = styled('button')`
      width: 120px;
      height: 40px;
      margin: 10px 0;
      border: 1px solid #C9C9C9;
      box-sizing: border-box;
      border-radius: 20px;
      display: flex;
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 160%;
      /* identical to box height, or 26px */
      align-items: center;
      justify-content: center;
      background-color: white;
      /* Text/main */
      cursor: pointer;
      color: rgba(0, 0, 0, 0.88);

      &:hover {
        background: ${({theme}) => theme.lightGradientColor};
        color: white;
        border: 0;
      }
    `
    export const Timer = styled('div')`
      margin-top: 10px;
      min-width: 120px;
      height: 40px;
      padding: 10px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 160%;
      background: ${({theme}) => theme.lightGradientColor};
      color: white;
      cursor: pointer;
    `
}
;

