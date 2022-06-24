import styled from "styled-components";
export namespace PriceCardStyles {
    export const PriceCard = styled.div`
        width: 300px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        border-radius: 20px;
        background: #ffffff;
        padding: 24px 0px;
        box-shadow: 0px 9px 44px -4px rgba(0, 0, 0, 0.12),
            0px 8px 16px -6px rgba(0, 0, 0, 0.14);
    `;
    export const Input = styled.input`
        outline: none;
        width: 100px;
        height: 40px;
        padding: 0 15px;
        border: 1px solid ${({ theme }) => theme.grayButton};
        box-sizing: border-box;
        border-radius: 10px;
        font-weight: bold;
        font-size: 14px;
        line-height: 160%;
        /* or 22px */
        ::placeholder {
            color: ${({ theme }) => theme.grayButton};
        }
    `;
    export const RowWrap = styled.div`
        display: flex;
        width: 100%;
        padding: 0 18px 17px 18px;
        justify-content: space-between;
        align-items: center;
    `;
    export const ICP = styled.div`
        width: 40px;
        height: 40px;
        border: 1px solid ${({ theme }) => theme.grayButton};
        box-sizing: border-box;
        border-radius: 50%;
        font-weight: bold;
        font-size: 14px;
        line-height: 160%;
        /* or 22px */

        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;

        color: #000000;
    `;
    export const Line = styled.div`
        width: 100%;
        height: 1px;
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
