import styled from "styled-components";

export namespace FileStyles {
    export const Title = styled('span')`
      width: 100%;
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 160%;
      color: ${({theme}) => theme.fontcolor};
      padding-bottom: 9px;

    `
    export const Container = styled('div')`
      height: 100%;
      max-width: 1200px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding-top: 51px;
    `
    export const LeftContent = styled('div')<{ width?: number }>`
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
    `
    export const RightContent = styled('div')<{ width?: number }>`
      width: ${({width}) => width ? width + 'px' : "100%"};
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
    `
    export const PreviewCard = styled('div')`
      width: 100%;
      height: 411px;
      background: rgba(255, 255, 255, 0.5);
      /* Neutral/100 */
      border: 1px solid ${({theme}) => theme.cardBorder};
      box-sizing: border-box;
      /* Back Blur */
      backdrop-filter: blur(40px);
      /* Note: backdrop-filter has minimal browser support */
      border-radius: 20px;
      padding: 12px;
    `
    export const ContentWrap = styled('div')`
      width: 100%;
      height: 282px;
      border-radius: 10px;
      overflow: hidden;
    `
    export const ContentImg = styled('img')`
      width: 100%;
      height: 100%;
      object-fit: cover;

    `
    export const InfoTitle = styled('div')`
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    `
    export const InfoSpan = styled('div')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 160%;
      color: #000000;
    `
    export const HelpText = styled('span')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 160%;
      color: #696969;
    `
    export const FeeHelp = styled('span')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 160%;
      color: #000000;
    `
    export const ButtonWrap = styled('div')`
      width: 120px;
    `
    export const RequireSymbol = styled('span')`
      &::after {
        content: "*";
        color: red;
        font-size: 16px;
        margin: 5px;
      }
    `
    export const AddContent = styled('div')`
      border: 1px solid #C9C9C9;
      box-sizing: border-box;
      border-radius: 20px;
      width: 100%;
      min-height: 105px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 30px;

    `
    export const AddTitle = styled('h5')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 160%;
      display: flex;
      align-items: center;
      text-align: center;
    `
    export const AddSubTitle = styled('div')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */

      /* Neutral/80 */

      color: #696969;
    `

}
