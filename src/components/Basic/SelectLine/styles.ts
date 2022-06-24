import styled from "styled-components";
export namespace SelectLineStyles {
    export const ButtonLineWrap = styled.div`
        width: 100%;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `;
    export const RoundButtonWrap = styled.div`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 160%;
      /* identical to box height, or 26px */

      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

        /* Text/main */

        color: #000000;
        background: none;
        height: 40px;
        width: 40px;
        border: 1px solid ${({theme}) => theme.borderColor};
        box-sizing: border-box;
        border-radius: 50%;
    `;
    export const GrayButtonWrap = styled.div`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 160%;
      /* identical to box height, or 26px */

      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      background: none;
      /* Text/disabled */

      color: #000000;
      height: 40px;
      padding: 0 10px;
      border: 1px solid ${({theme}) => theme.tabBorderColor};
      box-sizing: border-box;
      border-radius: 20px;
      cursor: pointer;
    `;
    export const RowList = styled.div`
        display: flex;
        align-items: center;
    `;
    export const PriceRangeWrap = styled.div`
    `;
    export const PriceCardWrap = styled.div`
=        display: flex;
        z-index: 999;
    `;
    export const CategoryWrap = styled.div`
    `;
    export const CollectionCardWrap = styled.div`
      display: flex;
      z-index: 999;
    `
    export const CategoryCardWrap = styled.div`
      display: flex;
      z-index: 999;
    `;
    export const AvatarWrap = styled.div<{ logo: string }>`
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: url("${({logo}) => logo}") center center no-repeat;
      background-size: contain;
    `;
}
