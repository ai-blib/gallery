import styled from "styled-components";

export namespace CollectionStyles {
    export const Collection = styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

    `;
    export const Container = styled('div')`
      padding: 0 60px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    `
    export const UsernameWrap = styled.div`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 160%;
      margin-top: 51px;
      display: flex;
      align-items: center;
    `;
    export const CreatedWrap = styled.div`
      display: flex;
      align-items: center;
      height: 26px;
    `;
    export const CreatedByWrap = styled.div`
      font-weight: bold;
      font-size: 16px;
      line-height: 160%;
      /* identical to box height, or 26px */
      display: flex;
      align-items: center;

      /* Text/disabled */

      color: rgba(0, 0, 0, 0.4);
    `;
    export const CreatedAvatarWrap = styled.div`
      width: 24px;
      height: 24px;
      background: url("/assets/checker.png");
      background-size: cover;
      border-radius: 50%;
    `;
    export const CreatorWrap = styled.div`
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */

      /* Text/main */
      color: rgba(0, 0, 0, 0.88);
    `;
    export const CreatedByWrapSpan = styled('span')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */

      display: flex;
      align-items: center;
      text-align: center;

      /* Text/secondary */

      color: rgba(0, 0, 0, 0.6);

    `
    export const DescriptionWrap = styled.div`
      font-weight: bold;
      font-size: 16px;
      line-height: 160%;
      /* identical to box height, or 26px */

      display: flex;
      align-items: center;
      text-align: center;

      /* Text/disabled */

      color: rgba(0, 0, 0, 0.4);
    `;
    export const DescriptionContentWrap = styled.div`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */

      display: flex;
      align-items: center;

      /* Text/secondary */

      color: rgba(0, 0, 0, 0.6);


    `;
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
      background: linear-gradient(180deg, #0059B3 0%, #007FFF 100%);;
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
      color: white;
    `;
    export const PriceWrap = styled.div`
      font-weight: bold;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */
      text-align: center;
      /* Text/main */
      color: white;
    `;
    export const ContentTextWrap = styled.div`
      display: flex;
      flex-wrap: wrap;
    `;
    export const CardsWrap = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      //Not compatible with IE11
      /* gap: 24px 64px; */
      margin: -24px 0 0 -64px;
    `;
    export const CardWrap = styled.div`
      padding-left: 64px;
      margin-top: 24px;
    `;
    export const SelectBar = styled.ul`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 34px;
      box-shadow: 0px 1px 0px #efefef;
      padding-left: -32px;
    `;
    export const RowList = styled.div`
      display: flex;
      align-items: center;
    `;
    export const GrayTextWrap = styled.button<{ active: boolean; theme: any }>`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      height: 100%;
      font-size: 16px;
      line-height: 160%;
      border: none;
      background: none;
      outline: none;
      /* identical to box height, or 26px */
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
      /* Text/disabled */
      color: rgba(0, 0, 0, 0.4);
      ${({active, theme}) =>
              active &&
              `
            color: ${theme.mainColor};
        `};
      cursor: pointer;
    `;
    export const RedLine = styled.div`
      width: 37px;
      height: 2px;
      background: #ff0000;
      border-radius: 1px 1px 0px 0px;
    `;
    export const ButtonLineWrap = styled.div`
      width: 100%;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    `;
    export const RoundButtonWrap = styled.button`
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

      color: rgba(0, 0, 0, 0.88);
      background: none;
      height: 40px;
      width: 40px;
      border: 1px solid #000000;
      box-sizing: border-box;
      border-radius: 50%;
    `;
    export const GrayButtonWrap = styled.button`
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

      color: rgba(0, 0, 0, 0.4);
      width: 120px;
      height: 40px;
      border: 1px solid #000000;
      box-sizing: border-box;
      border-radius: 20px;
    `;
    export const InfoWrap = styled.div`
      width: 100%;
      padding: 0 224px;

      display: flex;
      justify-content: space-between;
    `;
    export const TwitterWrap = styled.div`
      width: 56px;
      height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px 16px;
      /* Grey/3 */

      border: 1px solid #c9c9c9;
      box-sizing: border-box;
      border-radius: 20px;
      cursor: pointer;
    `;
    export const DiscordWrap = styled.div`
      width: 40px;
      height: 40px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px;
      border: 1px solid #c9c9c9;
      box-sizing: border-box;
      border-radius: 20px;
      cursor: pointer;
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
    export const BoxTab = styled('div')`
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 87px;
      opacity: 0.9;
      z-index: 1;
    `
}
