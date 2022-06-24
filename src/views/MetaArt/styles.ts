import styled from "styled-components";

export namespace MetaArtStyles {
    export const Wrap = styled('div')`
      width: 100vw;
      height: 100vh;

    `
    export const Univarse = styled("div")`
      width: 100%;
      height: 100%;
      position: relative;
      background: #030009;
      background-image: url('../assets/bars.svg');
      background-repeat: no-repeat;
      background-position: center 50% !important;
    `
    export const Header = styled('div')`
      top: 20px;
      position: absolute;
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 20px;
      z-index: 100;
    `
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
    export const Container = styled('div')`
      width: 100%;
      height: 100%;
      position: fixed;
      z-index: 1000;
      background: linear-gradient(90.38deg, rgba(0, 0, 0, 0.58) 27.51%, rgba(0, 0, 0, 0) 79.9%);
      padding: 0 60px;
    `
    export const Logo = styled('img')`
      width: 120px;
      height: 120px;
      border-radius: 50%;
    `
    export const Name = styled('div')`
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 160%;
      /* identical to box height, or 58px */
      display: flex;
      align-items: center;
      /* Grey/0 */
      color: #FFFFFF;
    `
    export const BtnWrap = styled('div')`
      margin-top: 50px;

    `
    export const PriceBoxWrap = styled.div`
      width: 430px;
    `;
    export const PriceBox = styled.div`
      width: 100%;
      height: 64px;
      //border: 1px solid #C9C9C9;
      box-sizing: border-box;
      border-radius: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 16px;
      background-image: linear-gradient(#ffffff, #ffffff), ${({theme}) => theme.lightGradientColor};
      background-clip: padding-box, border-box;
      background-origin: border-box;
      border: 2px solid transparent;
      border-radius: 12px;
    `;
    export const ColumnWrap = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    `;
    export const PriceTitleWrap = styled.div`
      font-size: 14px;
      line-height: 160%;
      font-weight: 700;
      /* or 22px */
      text-align: center;
      /* Text/secondary */
      color: #000000;
    `;
    export const PriceWrap = styled.div`
      font-weight: bold;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */
      text-align: center;
      /* Text/main */
      color: #000000;
    `;
    export const Layout = styled('header')`
      width: 100%;
      height: 60px;
      padding: 0 60px;
      position: absolute;
      top: 10px;
      left: 0;
      z-index: 100;
    `
    export const TurBox = styled.div`
      position: fixed;
      right: 20px;
      bottom: 20px;
      min-width: 100px;
      height: 64px;
      //border: 1px solid #C9C9C9;
      box-sizing: border-box;
      border-radius: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 16px;
      background-image: linear-gradient(#ffffff, #ffffff), ${({theme}) => theme.lightGradientColor};
      background-clip: padding-box, border-box;
      background-origin: border-box;
      border: 2px solid transparent;
      border-radius: 12px;
    `;
    export const BgIframe = styled('div')`
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;

      iframe {
        width: 100%;
        height: 100%;
      }
    `
}
