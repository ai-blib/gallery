import styled from "styled-components";
import {Skeleton} from "@mui/material";

export namespace ListItemStyles {
    export const Wrap = styled('div')`

      width: 100%;
      height: 100%;
      padding: 0 144px;

      .list-name {
        .css-1v4ccy {
          height: 40px !important;
        }
      }

      .css-1v4ccy {
        height: 40px !important;
      }

      .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
        height: 40px !important;

      }

      .MuiOutlinedInput-root {
        height: 40px !important;
      }

      .MuiOutlinedInput-input {
        height: 40px !important;
      }
    `
    export const TopSection = styled('div')`
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      background: #F9F9F9;
      border: 1px solid #EFEFEF;
      box-sizing: border-box;
      padding: 0 144px;

    `
    export const Icon = styled('img')<{ src: string }>`
      width: 40px;
      height: 40px;
      border-radius: 50%;

    `
    export const SmallTitle = styled('span')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 160%;
      /* or 19px */

      display: flex;
      align-items: center;
      text-align: center;

      /* Grey/4 */

      color: #696969;
    `
    export const MainTitle = styled('h5')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */

      /* Text/main */

      color: rgba(0, 0, 0, 0.88);
    `
    export const HeaderTitle = styled('h5')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 160%;
      color: #000000;
    `
    export const TextBox = styled('div')`
      width: 168px;
      height: 40px;
      background: #FFFFFF;
      border: 1px solid #C9C9C9;
      box-sizing: border-box;
      border-radius: 8px;
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 160%;
      /* or 19px */

      display: flex;
      align-items: center;
      justify-content: center;
      /* Text/main */

      color: rgba(0, 0, 0, 0.88);
    `
    export const TextBoxT = styled(TextBox)`
      background: #F9F9F9;
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 160%;
      /* or 19px */

      display: flex;
      align-items: center;
      /* Text/secondary */

      color: rgba(0, 0, 0, 0.6);


    `
    export const PriceInputWrap = styled('div')`
      width: 370px;
      height: 40px;
      margin-left: 12px;
    `
    export const TipBox = styled('div')`
      margin: 0 10px;
      cursor: pointer;
    `
    export const TipContent = styled('div')`
      width: 236px;
      height: 81px;
      background: #FFFFFF;
      padding: 10px;
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 160%;
      color: #696969;
      filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.15));
      border-radius: 3px;

    `
    export const ButtonContainer = styled('div')`
      width: 120px;
      height: 40px;
    `

}
