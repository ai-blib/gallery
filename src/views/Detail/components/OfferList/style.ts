import styled from "styled-components";

export namespace ActivityStyles {

    export const Wrap = styled('div')`
      width: 100%;
      height: 100%;
    `
    export const MainTitle = styled('h5')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: 900;
      font-size: 48px;
      line-height: 160%;
      /* identical to box height, or 77px */


      /* Text/main */

      color: rgba(0, 0, 0, 0.88);
      padding: 50px 0;
    `
    export const OfferButton = styled('div')`

      background: #FFFFFF;
      /* Main Blue */
      border: 1px solid #007FFF;
      box-sizing: border-box;
      border-radius: 20px;
      padding: 6px 12px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 160%;
      color: #007FFF;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &:hover {
        box-shadow: ${({theme}) => theme.hover_shadow};
      }
    `

}
