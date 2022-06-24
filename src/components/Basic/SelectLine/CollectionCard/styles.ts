import styled from "styled-components";
export namespace CollectionCardStyles {
    export const CollectionCard = styled.div`
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        border-radius: 20px;
        background: #ffffff;
        padding: 24px 0;
        box-shadow: 0px 9px 44px -4px rgba(0, 0, 0, 0.12),
            0px 8px 16px -6px rgba(0, 0, 0, 0.14);
    `;
    export const Sreach = styled.div`
        outline: none;
        width: 264px;
        height: 40px;
        padding: 0 15px;
        border: 1px solid #c9c9c9;
        box-sizing: border-box;
        border-radius: 10px;
        font-weight: bold;
        font-size: 14px;
        line-height: 160%;
        /* or 22px */
        display: flex;
        align-items: center;
    `;
    export const InnerInput = styled.input`
        width: 100%;
        outline: none;
        border: none;
        font-weight: bold;
        font-size: 14px;
        line-height: 160%;
        ::placeholder {
            color: ${({ theme }) => theme.grayButton};
        }
    `;
    export const ItemRowWrap = styled.div`
      box-sizing: border-box;
      display: flex;
      width: 264px;
      height: 40px;
      padding-left: 11px;
      align-items: center;

      :hover {
        background: ${({theme}) => theme.grayBackground};
      }

      cursor: pointer;
    `;
    export const AvatarWrap = styled.div<{ logo: string }>`
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: url("${({logo}) => logo}") center center no-repeat;
      background-size: contain;
    `;
    export const TextWrap = styled.div`
      font-weight: bold;
      font-size: 14px;
      line-height: 160%;
        /* or 22px */

        display: flex;
        align-items: center;

        color: #000000;
    `;
    export const Line = styled.div`
        width: 100%;
        background:  ${({ theme }) => theme.grayButton};
    `;
    export const ButtonWrap = styled.div`
        width: 100%;
        display: flex;
        padding: 12px 24px 0 24px;
        justify-content: space-between;
    `;
    export const Button = styled.div`
        width: 120px;
        height: 40px;
        background: ${({ theme }) => theme.grayBackground};
        box-sizing: border-box;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        font-size: 14px;
        line-height: 160%;
        /* or 22px */

        display: flex;
        align-items: center;
        text-align: center;

        color: #000000;
        cursor: pointer;
    `;
    export const ApplyButton=styled(Button)`
          background: ${({ theme }) => theme.buttonBg};
          color: #ffffff;
`
}
