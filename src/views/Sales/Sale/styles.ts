import styled from "styled-components";

export namespace SaleStyles {
    export const Wrap = styled('div')`
      width: 100%;
      height: 100%;
      max-width: 1200px;
      padding: 40px 172px;
      padding-top: 0;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    `
    export const Header = styled("div")`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    `;
    export const SwitchItem = styled('div')`
      margin-top: 20px;
      background: rgba(255, 255, 255, 0.76);
      /* blur+drop group */

      box-shadow: 0px 0px 16px -6px rgba(0, 127, 255, 0.14), 0px 0px 44px -4px rgba(0, 89, 179, 0.12);
      backdrop-filter: blur(40px);
      /* Note: backdrop-filter has minimal browser support */
      border-radius: 200px;


      .MuiTab-textColorPrimary {
        background: ${({theme}) => theme.lightGradientColor};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
      }

      .MuiTab-textColorPrimary.Mui-selected {
        background: none;
        -webkit-background-clip: inherit;
        -webkit-text-fill-color: #FFFFFF;
      }

      .Mui-selected {
        color: #FFFFFF !important;
        position: relative;
        z-index: 10;
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 160%;
        /* identical to box height, or 26px */

        display: flex;
        align-items: center;
        text-align: center;

        /* Grey/0 */

        color: #FFFFFF;
      }


    `

    export const Banner = styled('img')`
      width: 100%;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      border-radius: 20px;

    `
    export const Content = styled('div')`
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding-top: 38px;
    `
    export const MainTitle = styled('div')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 160%;
      display: flex;
      align-items: center;
      color: rgba(0, 0, 0, 0.88);
      margin-right: 34px;

    `
    export const TwitterWrap = styled('div')`
      width: 130px;
      height: 40px;
      background: #FFFFFF;
      border: 1px solid #C9C9C9;
      box-sizing: border-box;
      border-radius: 20px;
      padding: 10px;
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */

      display: flex;
      align-items: center;

      /* Text/main */

      color: rgba(0, 0, 0, 0.88);
    `
    export const CreatedBy = styled('div')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 160%;
      display: flex;
      align-items: center;
      text-align: center;
    `
    export const Icon = styled('img')`
      width: 24px;
      height: 24px;
      border-radius: 50%;
      margin-left: 16px;
      margin-right: 8px;
    `
    export const Name = styled('span')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 160%;
      color: rgba(0, 0, 0, 0.88);
    `
    export const DescriptionTitle = styled('h5')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 160%;
      display: flex;
      align-items: center;
      color: rgba(0, 0, 0, 0.6);
      margin-top: 17px;
    `
    export const P = styled('p')<{ width?: string }>`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 160%;
      /* or 19px */

      display: flex;
      align-items: center;

      /* Grey/4 */

      color: #696969;
      width: ${({width}) => width || "409px"};
    `
    export const MintBox = styled('div')`
      padding: 16px;
      width: 320.69px;
      min-height: 101px;
      background-image: linear-gradient(#ffffff, #ffffff), ${({theme}) => theme.lightGradientColor};
      background-clip: padding-box, border-box;
      background-origin: border-box;
      border: 2px solid transparent;
      border-radius: 12px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

    `
    export const Number = styled('div')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 160%;
      /* identical to box height, or 29px */

      text-align: center;

      /* Text/main */

      color: rgba(0, 0, 0, 0.88);
    `
    export const TotalWrap = styled('span')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */

      text-align: center;

      /* Text/secondary */

      color: rgba(0, 0, 0, 0.6);
    `
    export const Avaliable = styled(TotalWrap)`
      color: ${({theme}) => theme.mainColor};

    `
    export const MintButton = styled('div')`
      width: 308px;
      height: 40px;
      margin-top: 20px;

    `
    export const PleaseNoteWrap = styled('div')`
      margin-top: 30px;
      padding-top: 16px;
      display: flex;
      border-top: 1px solid #EFEFEF;
      display: flex;
      align-items: baseline;
    `
    export const PN = styled('span')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      width: 100px;
      /* or 22px */

      display: flex;
      align-items: center;

      /* Text/secondary */

      color: rgba(0, 0, 0, 0.6);

    `
    export const Timer = styled('div')`
      padding: 5px;
      width: 320.69px;
      min-height: 101px;
      background-image: linear-gradient(#ffffff, #ffffff), ${({theme}) => theme.lightGradientColor};
      background-clip: padding-box, border-box;
      background-origin: border-box;
      border: 2px solid transparent;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `
    export const TimerBox = styled('div')`
      position: absolute;
      top: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      margin-top: 10px;
      opacity: 0.8;
    `
    export const TimerText = styled('div')`
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 160%;
      /* identical to box height, or 58px */

      text-align: center;

      color: #000000;
    `
}
