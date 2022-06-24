import styled from "styled-components";
export namespace ProfileStyles {
    export const Profile = styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      //padding: 0 40px;
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
    export const UserPrincipalWrap = styled.div`
        margin-top: 8px;
        margin-bottom: 16px;
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
        ${({ active, theme }) =>
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
    export const TabPanel = styled('div')<{active:boolean}>`
        width: 100%;
        height: 100%;
        display: ${({active})=>active?'flex':'none'};
`
}
