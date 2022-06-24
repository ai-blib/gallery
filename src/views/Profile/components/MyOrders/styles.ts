import styled from "styled-components";

export namespace CollectionsStyles {
    export const Wrap = styled("div")`
      display: content;
      width: 100%;
    `;
    export const Content = styled("div")`
      width: 100%;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
    `;
    export const NftWrap = styled("div")`
      margin-right: 32px;
      margin-bottom: 32px;
    `;
    export const Header = styled("div")`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
    `;
    export const MainTitle = styled("h2")`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: 900;
      font-size: 48px;
      line-height: 160%;
      color: rgba(0, 0, 0, 0.88);
      flex: none;
      order: 0;
      flex-grow: 0;
    `;
    export const SelectedTitle = styled("h5")`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: 900;
      font-size: 48px;
      line-height: 160%;
      flex: none;
      order: 0;
      flex-grow: 0;
      margin: 0px 12px;
      background-image: linear-gradient(90deg, #ff0000 41.67%, #ff8080 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    `;
    export const TabWrap = styled("ul")`
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      margin-bottom: 39px;
      margin-top: 15px;
    `;
    export const TabItem = styled.li<{
        active: Boolean;
        children: JSX.Element;
    }>`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      width: 120px;
      height: 40px;
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 160%;
      /* identical to box height, or 26px */
      text-align: center;
      color: rgba(0, 0, 0, 0.88);
      border: 1px solid ${({theme}) => theme.tabBorderColor};
      box-sizing: border-box;
      border-radius: 20px;
      margin-right: 20px;
      ${({active, theme}) =>
        active &&
        `
                    background: ${theme.lightGradientColor};
                    color: #FFFFFF;
                    border:0;
         `};
      cursor: pointer;

      &:hover {
        box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
        transition: all 0.2s ease 0s;
      }
    `;
    export const SelectedItem = styled.div`
      background-image: ${({theme}) => theme.buttonBg};
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    `;
    export const CardWrap = styled.div`
      margin: 0 14px;
      margin-top: 24px;
    `;
    export const SwitchItem = styled('div')`
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
      opacity: 0.9;
      z-index: 1;
    `
    export const CardsWrap = styled.div<{ active: boolean }>`
      width: 100%;
      justify-content: center;
      flex-wrap: wrap;
      display: ${({active}) => active ? `flex` : 'none'};

      /* //Not compatible with IE11 */
      /* gap: 24px 64px; */
    `;

}
