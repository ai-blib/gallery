import styled from "styled-components";
export namespace ItemCardStyles {
    export const ItemCard = styled.div<{ width }>`
        cursor: pointer;
        overflow: hidden;
        /* Grey/10 */
        width: ${({ width }) => width || 280}px;
      height: 420px;
      border: 1px solid #C9C9C9;
      box-sizing: border-box;
      padding: 11px 11px 17px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background: rgba(255, 255, 255, 0.2);
      /* Solid-W */

      /* blur */
      box-shadow: rgb(4 17 29 / 25%) 0px 0px 6px 0px;

      backdrop-filter: blur(40px);
      /* Note: backdrop-filter has minimal browser support */

      border-radius: 20px;

      transition: all 0.5s;

      &:hover {
        //box-shadow: 0px 15px 35px -5px rgb(50 88 130 / 32%);
        transform: translateY(-5px);
      }
    `;
     export  const ButtonDetail =styled('div')`
                    display: none;
                   width: auto;
`
    export const ItemImg = styled.div<{url:string|undefined}>`
        height: 72.31%;
        align-self: stretch;
        margin-bottom: 11px;
        border-radius: 10px;
        object-fit: cover;
        background: url(${({url})=>url}) no-repeat center;
      background-size: 100%;
      border: solid 1px ${({theme})=>theme.cardBorder};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      position: relative;

      &:before {
        content: "";
        background: inherit;
        width: 100%;
        height: 100%;
        box-shadow: 0px 10px 40px 0px rgb(76 70 124 / 20%);
        display: block;
        z-index: 1;
        position: absolute;
        top: 10px;
        transform: scale(0.9);
        filter: blur(10px);
        opacity: 0.9;
        border-radius: 15px;
      }

      &:after {
        content: "";
        background: inherit;
        width: 100%;
        height: 100%;
        box-shadow: 0px 10px 40px 0px rgb(76 70 124 / 5%);
        display: block;
        z-index: 2;
        position: absolute;
        border-radius: 1px;

      }

      &:hover {
        .detail {
          display: flex;
        }
      }
    `;
    export const InfoWrap = styled.div`
        padding: 0 0 0 4px;
        width: 100%;
        display: flex;
        font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
        font-style: normal;
        align-items: center;
        justify-content: space-between;
    `;
    export const NameWrap = styled.div`
        font-weight: bold;
        font-size: 14px;
        line-height: 160%;
        color: rgba(0, 0, 0, 0.88);
    `;
    export const RelativeWrap = styled.div`
        align-self: stretch;
        position: relative;
    `;
    export const PriceWrap = styled.div`
        font-size: 14px;
        font-weight: bold;
        line-height: 160%;
        display: flex;
        align-items: center;
        text-align: right;
        color: rgba(0, 0, 0, 0.88);
    `;
    export const GrayNameWrap = styled.div`
        font-weight: 600;
        font-size: 10px;
        line-height: 160%;
        color: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
    `;
    export const GrayLightWrap = styled.div`
        font-weight: normal;
        font-size: 10px;
        line-height: 160%;
        /* identical to box height, or 16px */
        display: flex;
        align-items: center;
        /* Text/disabled */
        color: rgba(0, 0, 0, 0.4);
    `;
    export const Avatar = styled.div`
        width: 21px;
        height: 21px;
        background: url("../../../assets/checker.png");
        background-size: cover;
        border-radius: 50%;
        margin-right: 3px;
    `;
    export const OutlinedButton = styled.div`
        /* Grey/3 */
        width: 120px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: none;
        border: 1px solid #d3d3d3;
        box-sizing: border-box;
        border-radius: 20px;

        font-weight: bold;
        font-size: 14px;
        line-height: 160%;

        cursor: pointer;
        &:hover{
           background: ${({theme})=>theme.buttonBg};
           border: 0;
           color: #ffffff;
        }
    `;
}
