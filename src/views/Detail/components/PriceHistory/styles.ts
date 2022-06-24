import styled from "styled-components";

export namespace PriceHistoryStyles {
    export const Wrap = styled('div')`
      width: 600px;
      min-height: 300px;
      background: transparent;
        // border: 1px solid ${({theme}) => theme.borderColor};
      box-sizing: border-box;
      //border-radius: 16px;
      padding: 10px;
      display: flex;
      flex-direction: column;
    `
    export const Title = styled('h5')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 160%;
      /* or 38px */

      display: flex;
      align-items: center;
      text-align: center;
      margin-right: 28px;

      color: #000000;

    `
    export const EchartsContainer = styled('div')`
      height: 100%;
      display: flex;
      align-content: center;
      justify-content: center;

    `
    export const Echarts = styled('div')`
      width: 1000px;
      height: 100%;
    `

}