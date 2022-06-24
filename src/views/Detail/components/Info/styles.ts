import styled from "styled-components";

export namespace INfoStyles {
    export const DetailWrap = styled.div`
      width: 100%;
      display: flex;
      flex-direction: row;
      margin-top: 15px;
      padding: 0 30px;
    `;
    export const NftDisplay = styled('div')<{ src?: string }>`
      width: 450px;
      height: 500px;
      border: 1px solid #D3D3D3;
      box-sizing: border-box;
      border-radius: 16px;
      ${({src}) => src && `background: url(${({src}) => src}) center center no-repeat;`};
      background-size: cover;
      overflow: hidden;
    `
    export const formWrap = styled('div')`
      flex: 1;
      display: flex;
      justify-content: center;
      flex-direction: column;
      height: 100%;
      padding: 15px;


    `

    export const MyLink = styled('div')`
      font-size: 20px;
      color: rgb(32, 129, 226);
    `
    export const SContent = styled('section')`
      width: 100%;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      //border: 1px solid rgb(229, 232, 235);
      margin-bottom: 10px;
      //background: white;
    `
    export const InfoBox = styled('div')`
      min-width: 174px;
      height: 64px;
      display: flex;
      flex-direction: row;
      align-items: center;
      border: 1px solid #C9C9C9;
      box-sizing: border-box;
      border-radius: 12px;
      padding: 5px;
    `
    export const Container = styled('div')`
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
    `
    export const BContent = styled('section')`
      width: 100%;
      height: 200px;
      padding: 20px;
      box-sizing: border-box;
      border: 1px solid rgb(229, 232, 235);
      border-top: 0;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      background: #fafcfe;
    `

    export const ButtonWrap = styled('div')`
      width: 122px;
      margin-right: 20px;
    `
    export const PriceDsc = styled('div')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */
      text-align: center;
      color: #000000;
    `
    export const Price = styled('div')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: 900;
      font-size: 36px;
      line-height: 160%;
      /* identical to box height, or 58px */

      text-align: center;

      color: #000000;
    `
    export const STitle = styled('span')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-size: 14px;
      line-height: 160%;
      display: flex;
      align-items: center;
      text-align: center;
      color: rgba(0, 0, 0, 0.6);
    `
    export const BName = styled('span')`
      /* 14 bold */
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 160%;
      /* or 22px */

      display: flex;
      align-items: center;
      text-align: center;
      color: rgba(0, 0, 0, 0.88);
    `
    export const List = styled('ul')`
      width: 100%;
      height: 100%;
    `
    export const Item = styled('li')`
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 15px;

    `
    export const CollectionLogo = styled('img')`
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: 0;
      padding: 5px;
    `
}
