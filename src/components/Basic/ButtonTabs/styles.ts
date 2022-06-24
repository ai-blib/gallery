import styled from "styled-components";

export namespace ButtonTabsStyles {
    export const Wrap = styled('div')<{ height?: number | string, background?: string | any }>`
      width: 100%;
      border: 1px solid ${({theme}) => theme.borderColor};
      box-sizing: border-box;
      border-radius: 20px;
      padding: 5px;
      background: ${({background}) => background || '#FFFFFF'};

      .MuiTabs-root {
        min-height: auto;
      }

      .MuiTabs-flexContainer {
        height: ${({height}) => (height ? height + 'px' : "auto")};
      }

      .MuiTabs-flexContainer {
        min-height: auto;

        button {
          min-height: auto;
          padding: 8px;
          text-transform: none;
        }
      }

      .MuiTabs-indicator {
        height: 100%;
        background: ${({theme}) => theme.mainBackground};
        border-radius: 18px;
      }

      .MuiTab-textColorPrimary.Mui-selected {
        color: #FFFFFF;
        position: relative;
        z-index: 10;
      }
    `
}