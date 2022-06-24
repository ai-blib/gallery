import styled from "styled-components";

export namespace ItemsStyles {
    export const Items = styled.div`
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      /* Not compatible with IE11 */
      gap: 24px 64px;
      /* margin: -24px 0 0 -64px; */
    `;
    export const CardWrap = styled.div`
      margin-top: 24px;
      padding-left: 20px;
    `;
    export const CardsWrap = styled.div`
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 32px;
      //Not compatible with IE11
      /* gap: 24px 64px; */
    `;
}
