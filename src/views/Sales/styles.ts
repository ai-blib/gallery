import styled from "styled-components";

export namespace CollectionsStyles {
    export const Wrap = styled("div")`
      display: content;
      max-width: 1200px;
      width: 100%;
      padding: 0 30px;
    `;
    export const Content = styled("div")`
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      flex-wrap: wrap;
    `;
    export const MainTitle = styled("h2")`
      padding: 20px 0px;
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 160%;
      /* identical to box height, or 58px */


      /* Text/main */

      color: rgba(0, 0, 0, 0.88);
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
}
