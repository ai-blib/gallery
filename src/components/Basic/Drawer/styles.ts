import styled from 'styled-components';

export namespace DrawerStyles {
    export const Container = styled('div')`
      width: 100%;
      height: 100%;
      background-color: #FFFFFF;
      filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.25));
      padding: 19px 17px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 40px;
    `
    export const InfoWrap = styled('div')`
      width: 100%;
      height: 68px;
      background: #ffffff;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      padding: 8px 16px;
      box-sizing: border-box;
      justify-content: space-between;
      align-items: center;
      border: 1px solid ${({theme}) => (theme.borderColor)};

    `
    export const InfoItem = styled('div')`
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
    `
    export const InfoSpan = styled('span')<{ color?: string, fontSize?: number | string }>`
      color: ${({color}) => (color || 'rgba(0, 0, 0, 0.6)')};
      font-size: ${({fontSize}) => (fontSize || 16)}px;
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      line-height: 160%;
      /* identical to box height, or 26px */
      display: flex;
      align-items: center;
    `
    export const Cursor = styled('span')`
      cursor: pointer;
      display: contents;

    `
    export const BalanceWrap = styled('div')`
      width: 100%;
      height: 158px;
      border: 1px solid ${({theme}) => (theme.borderColor)};
      box-sizing: border-box;
      border-radius: 12px;
      padding: 15px 17px;
      padding-top: 13px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

    `
    export const Title = styled('span')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 160%;
      /* identical to box height, or 26px */

      display: flex;
      align-items: center;

      color: #696969;
    `
    export const Funs = styled('span')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 160%;
      /* or 38px */
      display: flex;
      align-items: center;
      text-align: center;
      color: #000000;

    `
    export const IcpWrap = styled('div')`
      height: 52px;
      width: 100%;
      border: 1px solid ${({theme}) => theme.borderColor};
      box-sizing: border-box;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 16px;
    `
    export const IcpIconWrap = styled('div')`
      display: flex;
      flex-direction: row;
    `
    export const AmountWrap = styled('div')`
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

    `
    export const Btn = styled('div')`
      width: 148px;
      height: 40px;
      border: 1px solid ${({theme}) => theme.borderColor};
      box-sizing: border-box;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 160%;
      /* identical to box height, or 26px */

      display: flex;
      align-items: center;
      text-align: center;

      color: #000000;
      cursor: pointer;
      margin-bottom: 16px;
    `
    export const MainButton = styled(Btn)`
      background: linear-gradient(96.34deg, #FF0000 0%, #FF006F 100%);
      color: white;
      margin-top: 16px;

    `
    export const ConnectWallet = styled('div')`
      width: 154px;
      height: 40px;
      border: 1px solid #D3D3D3;
      box-sizing: border-box;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 160%;
      text-align: center;
      color: rgba(0, 0, 0, 0.6);
      cursor: pointer;

      svg {
        width: 50px;
      }
    `
    export const WithdrawBtn = styled('div')`
      .m-button .n-button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        background-image: linear-gradient(#ffffff, #ffffff), ${({theme}) => theme.lightGradientColor};
        background-clip: padding-box, border-box;
        background-origin: border-box;
        border: 2px solid transparent;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 160%;
        /* identical to box height, or 26px */
        text-align: center;
        /* Text/main */
        color: rgba(0, 0, 0, 0.88);
      }

    `
    export const Profile = styled('div')<{ src?: string | undefined }>`
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: url(${({src}) => src || "/assets/checker.png"}) center center no-repeat;
      background-size: cover;
      margin-right: 10px;
    `
    export const IconWrap = styled('div')`
      width: auto;
      height: auto;
      cursor: pointer;
      //box-shadow: 6px 6px 12px rgb(0 0 0 / 40%), -6px -6px 12px rgb(255 255 255 / 70%);
      //box-sizing: border-box;
    `
    export const ReceiveCoin = styled('div')`
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #007FFF;
      font-size: 18px;
      text-decoration: underline;
      padding: 10px;
    `
}
