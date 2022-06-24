import styled, {keyframes} from "styled-components";

export namespace LoadingModalStyles {
    export const Container = styled('div')`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

    `
    export const MainTitle = styled('div')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 160%;
      /* or 38px */

      display: flex;
      align-items: center;
      text-align: center;

      /* Text/main */

      color: rgba(0, 0, 0, 0.88);

    `
    export const SubTitle = styled('span')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */

      display: flex;
      align-items: center;
      text-align: center;

      /* Text/main */

      color: rgba(0, 0, 0, 0.88);
    `
    export const CancelBtn = styled('div')`
      width: 150px;
      height: 40px;
      cursor: pointer;
      background-image: linear-gradient(#ffffff, #ffffff), ${({theme}) => theme.lightGradientColor};
      background-clip: padding-box, border-box;
      background-origin: border-box;
      border: 2px solid transparent;
      box-sizing: border-box;
      border-radius: 20px;
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 160%;
      /* identical to box height, or 26px */

      display: flex;
      align-items: center;
      justify-content: center;

      /* Untitled/Error/main */

      color: #000000;
      margin-right: 20px;
    `
    const rotate = keyframes`
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    `;
    export const CircleMove = styled('img')`
      position: absolute;
      width: 100px;
      animation: ${rotate} 2s linear infinite;
    `

}
