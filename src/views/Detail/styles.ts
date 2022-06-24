import styled from "styled-components";

export namespace DetailStyles {
    export const DetailWrap = styled.div`
      max-width: 1280px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 15px;
      padding: 0 30px;
    `;
    export const ButtonWrap = styled('div')`
      width: 122px;
      margin-right: 20px;
    `
    export const NftDisplay = styled('div')<{ src?: string }>`
      transition: all 0.2s;
      width: 600px;
      min-height: 100px;
      max-width: 100%;
      max-height: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #D3D3D3;
      box-sizing: border-box;
      border-radius: 16px;
      overflow: hidden;

      .inner {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        border-radius: initial;
      }
    `

    export const formWrap = styled('div')`
      flex: 1;
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 100%;
      padding: 15px;


    `
    export const TopContent = styled('div')`
      width: 100%;
      height: auto;
    `
    export const TitleName = styled('div')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: 900;
      font-size: 36px;
      line-height: 160%;
      text-align: left;
      color: rgba(0, 0, 0, 0.88);
    `
    export const OwnerBy = styled('div')`
      color: #86909c;
      font-size: 15px;
      line-height: 30px;
      margin-right: 10px;

    `
    export const Fav = styled('div')`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      border: 1px solid #C9C9C9;
      box-sizing: border-box;
      border-radius: 20px;
      height: 42px;
      overflow: hidden;

    `
    export const Span = styled('span')`
      color: rgb(112, 122, 131);
      font-size: 15px;
    `
    export const MyLink = styled('div')`
      font-size: 20px;
      color: rgb(32, 129, 226);
    `
    export const Favorite = styled('div')`
      padding: 5px;

      svg {
        font-size: 25px;
      }
    `
    export const SContent = styled('section')`
      width: 100%;
      height: 60px;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      border: 1px solid rgb(229, 232, 235);
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;

    `
    export const Container = styled('div')`
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
    `
    export const BContent = styled('section')`
      width: 100%;
      height: 200px;
      padding: 20px;
      box-sizing: border-box;
      border: 1px solid rgb(229, 232, 235);
      border-top: 0;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    `
    export const SpaceWrap = styled('div')`

    `

    export const BuyWrap = styled('div')`
      width: 100%;
      min-height: 90px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 16px 24px;
      box-sizing: border-box;
      border: 1px solid #C9C9C9;
      //box-shadow: 0px 0px 16px rgba(255, 0, 0, 0.25);
      border-radius: 12px;
    `
    export const PriceWrap = styled('div')`
      display: flex;
      align-items: center;
    `

    export const PriceDsc = styled('div')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */
      text-align: center;
      color: #000000;
    `
    export const Price = styled('div')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: 900;
      font-size: 36px;
      line-height: 160%;
      /* identical to box height, or 58px */

      text-align: center;

      color: #000000;
    `
    export const STitle = styled('span')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */

      display: flex;
      align-items: center;
      text-align: center;

      /* Text/disabled */

      color: rgba(0, 0, 0, 0.25);
    `
    export const BName = styled('span')`
      /* 14 bold */
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */

      display: flex;
      align-items: center;
      text-align: center;

      /* bk */

      color: #000000;
    `
    export const List = styled('ul')`
      width: 100%;
      height: 100%;
    `
    export const Item = styled('li')`
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 15px;

    `
    export const ItemTitle = styled("h5")`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 160%;
      color: rgba(0, 0, 0, 0.6);
    `
    export const ItemDe = styled('h5')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 160%;
      color: #000000;
    `
    export const OwnerSpan = styled('div')`
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 160%;
      color: rgba(0, 0, 0, 0.6);
      display: flex;

    `
    export const Mask = styled('div')<{ visible: boolean }>`
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.6);
      z-index: ${({visible}) => visible ? 100000 : -1};

    `
    export const CloseBox = styled('div')`
      position: absolute;
      top: 30px;
      right: 30px;
    `
    export const Header = styled('div')`
      position: absolute;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 60px;
    `
    export const BoxWrap = styled('div')`
      width: auto;
      height: auto;
      position: relative;
    `
    export const Btn3D = styled('div')`

      position: absolute;
      border-radius: 50%;
      background: ${({theme}) => theme.gradientBgColor};
      right: 20px;
      top: 20px;
      color: #FFFFFF;
      padding: 10px;
      font-size: 20px;
      cursor: pointer;
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
