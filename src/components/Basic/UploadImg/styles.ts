import styled from "styled-components";

export namespace UploadImgStyles {
    export const UploadFile = styled('div')`
      width: 100%;
      height: 257px;
      border: 1px dashed ${({theme}) => theme.imgUploadBorder};
      box-sizing: border-box;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
      background: #E3EDF7;
      box-shadow: 4px 2px 8px 0px #5f9de77a inset, -4px -2px 8px 0px #ffffff inset;
      border-color: #7E97B8;
    `
    export const Title = styled('div')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 160%;
      /* identical to box height, or 26px */
      text-align: center;
      /* Neutral/80 */
      color: ${({theme}) => theme.grayColor};
    `
    export const UploadButton = styled('span')`
      border-radius: 20px;
      padding: 0 33px;
      height: 40px;
      background: #C4C4C4;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      cursor: pointer;
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: 900;
      font-size: 16px;
      line-height: 160%;
      /* identical to box height, or 26px */

      text-align: center;

      color: #151515;

    `
    export const PreviewImg = styled('img')`
      width: 100%;
      height: 100%;
      object-fit: cover;
    `
}
