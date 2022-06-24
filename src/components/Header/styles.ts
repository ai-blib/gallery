import styled from "styled-components";

export namespace HeaderStyles {
    export const Wrap = styled('div')`
      width: 100%;
      height: 72px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      padding: 0 60px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(40px);
      position: fixed;
      z-index: 10000;
      top: 0;
      left: 0;
    `
    export const Header = styled.header`
      max-width: 2200px;
      width: 100%;
      height: 72px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      background: #ffffff;
    `;
    export const SearchWrap = styled.div`
      width: 322px;
    `;
    export const RowWrap = styled.ul`
      display: flex;
      align-items: center;
      flex-direction: row;
    `;
    export const RowListItem = styled.li<{ active: boolean }>`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-familystyle: normal;
      font-size: 16px;
      line-height: 160%;
      font-weight: bolder;
      /* identical to box height, or 26px */
      display: flex;
      align-items: center;
      text-align: center;
      /* 2 */
      color: #696969;
      /* Inside Auto Layout */
      flex: none;
      order: 0;
      flex-grow: 0;
      margin: 0px 16px;
      cursor: pointer;

      ${({active, theme}) => (active && ` background: ${theme.lightGradientColor};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;`)}
      &:hover {
        background: ${({theme}) => theme.lightGradientColor};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        cursor: pointer;
      }
    `;
    export const BaseButton = styled("button")`
      border: 0;
      background: ${({theme}) => theme.buttonBg};
      border-radius: 20px;
      width: 120px;
      height: 40px;
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: 900;
      font-size: 16px;
      line-height: 160%;
      /* identical to box height, or 26px */
      display: flex;
      align-items: center;
      justify-content: center;
      /* Grey/0 */
      color: #ffffff;
      cursor: pointer;
    `;
}
