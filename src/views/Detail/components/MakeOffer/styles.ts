import styled from "styled-components";

export namespace MakeOfferStyles {
    export const Wrap = styled('div')`
      width: 581px;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 0 24px;
    `
    export const ItemList = styled('div')`
      width: 100%;
      border-bottom: 1px solid #EFEFEF;
      padding: 15px 0;

    `
    export const Item = styled('div')`
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 0;
    `
    export const ItemTitle = styled('span')`

      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 160%;
      /* identical to box height, or 29px */

      display: flex;
      align-items: center;

      /* Text/secondary */

      color: rgba(0, 0, 0, 0.6);
    `
    export const ItemContent = styled('div')`
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 160%;
      /* identical to box height, or 29px */

      display: flex;
      align-items: center;
      text-align: right;

      /* Text/main */

      color: rgba(0, 0, 0, 0.88);
    `
    export const MoneySelected = styled('div')`
      padding:5px 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #EFEFEF;
      box-sizing: border-box;
      border-radius: 8px;
      margin-left: 10px;
    `
    export const InfoSpan = styled('div')`
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 160%;
      /* identical to box height, or 29px */

      display: flex;
      align-items: center;

      color: #4A4A4A;
    `
    export const HelpText = styled('div')`
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */

      display: flex;
      align-items: center;

      /* Grey/3 */

      color: #C9C9C9;
    `
    export const HelpMoneyText = styled('div')`
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 160%;
      /* or 22px */

      display: flex;
      align-items: center;
      text-align: right;

      /* Grey/4 */

      color: #696969;
    `
}
