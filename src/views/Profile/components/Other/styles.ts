import styled from "styled-components"

export namespace OwnedStyles {
    export const Owned = styled.div`
      width: 100%;
      display: content;
      height: 100%;
   `
    export const CardsWrap = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      //Not compatible with IE11
      /* gap: 24px 64px; */
      //margin: -24px 0 0 -64px;
   `;
    export const CardWrap = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
   `;
}
