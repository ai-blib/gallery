import styled from "styled-components"
export namespace OwnedStyles{
   export const Owned = styled.div`
     position: relative;
     display: content;
     width: 100%;
   `
    export const CardsWrap = styled.div<{ active: boolean }>`
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      display: ${({active}) => active ? `flex` : 'none'};

      /* //Not compatible with IE11 */
      /* gap: 24px 64px; */
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
}
