import styled from "styled-components";

export namespace CreateStyles {
    export const Wrap = styled('div')`
      width: 100%;
      padding: 36px 100px;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    `
    export const Header = styled('header')`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `
    export const HeaderTitle = styled('span')`
      font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      line-height: 160%;
      /* identical to box height, or 58px */
      text-align: center;
      color: ${({theme}) => (theme.fontcolor)}
    `
    export const Container = styled('div')`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    `
    export const Content = styled('div')<{ width?: number }>`
      width: ${({width}) => width ? width + 'px' : "100%"};
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `
    export const Card = styled('div')`
      width: 278px;
      height: 382px;
      background: #F0F0F0;
      /* Grey/3 */
      border: 1px solid #C9C9C9;
      border-radius: 20px;
      padding: 16px;
      box-sizing: border-box;
      position: relative;
      //box-shadow: 3px 3px 6px rgb(0 0 0 / 25%), -3px -3px 6px rgb(255 255 255 / 30%);
      .btn {
        position: absolute;
        bottom: 20px;
        left: 0;
      }

      cursor: pointer;

      &:hover {
        box-shadow: 0px 15px 35px -5px rgb(50 88 130 / 32%);
      }
    `
    export const InnerCard = styled('div')`
      width: 100%;
      height: 294px;
      background: rgba(255, 255, 255, 0.5);
      /* Grey/3 */

      border: 1px solid #C9C9C9;
      box-sizing: border-box;
      /* Back Blur */

      backdrop-filter: blur(40px);
      /* Note: backdrop-filter has minimal browser support */

      border-radius: 12px;
      padding: 9px;
      display: flex;
      flex-direction: column;

    `
    export const CardImg = styled('img')`
      width: 100%;
      height: 200px;
    `
    export const GrayBord = styled('div')`
      width: 86px;
      height: 15px;
      background: #C4C4C4;
      border-radius: 20px;
      margin: 10px;
    `
    export const GrayCircle = styled('div')`
      width: 20px;
      height: 20px;
      background: #C4C4C4;
      border-radius: 50%;
      margin: 10px;
    `
    export const GrayBut = styled('div')`
      width: 85px;
      height: 28px;
      background: #C4C4C4;
      border-radius: 14px;
      margin: 10px;
    `
    export const ApplyButton = styled('div')`
      width: 120px;
      height: 40px;
      border: 1px solid #696969;
      box-sizing: border-box;
      border-radius: 20px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 160%;
      /* identical to box height, or 26px */
      display: flex;
      align-items: center;
      justify-content: center;
      /* Text/main */
      color: rgba(0, 0, 0, 0.88);
      cursor: pointer;

      &:hover {
        background: ${({theme}) => theme.mainColor};
        color: white;
      }

    `
    export const Line = styled('div')`
      width: 1px;
      height: 302px;
      background: #C9C9C9;
      margin: 0 60px;
    `
    export const MusicCardInner = styled('div')`
      width: 100%;
      height: 177px;
      display: flex;
      background: rgba(255, 255, 255, 0.5);
      /* Grey/3 */
      border: 1px solid #C9C9C9;
      box-sizing: border-box;
      /* Back Blur */

      backdrop-filter: blur(40px);
      /* Note: backdrop-filter has minimal browser support */

      border-radius: 16px;
      padding: 8px;
      flex-direction: column;
    `
    export const Inner = styled('img')`
      width: 100%;
      height: 90px;
      border: 1px solid #C9C9C9;
      box-sizing: border-box;
      border-radius: 10px;
    `
    export const SubTitle = styled('div')`
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */

      text-align: center;

      color: rgba(0, 0, 0, 0.6);

    `
    export const MainTitle = styled('div')`
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 160%;
      /* or 38px */
      text-align: center;
      /* Text/main */
      color: rgba(0, 0, 0, 0.88);
      margin: 20px;

    `
}
