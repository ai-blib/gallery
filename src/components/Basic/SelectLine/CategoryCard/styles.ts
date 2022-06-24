import styled from "styled-components";
export namespace CategoryCardStyles {
    export const CategoryCard = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 19px 0;
        width: 120px;
        background: #ffffff;
        box-sizing: border-box;
        border-radius: 12px;
        box-shadow: 0px 9px 44px -4px rgba(0, 0, 0, 0.12),
            0px 8px 16px -6px rgba(0, 0, 0, 0.14);
    `;
    export const Item = styled.div`
        font-weight: bold;
        font-size: 12px;
        line-height: 160%;
        /* or 19px */
        display: flex;
        align-items: center;
        width: 100%;
        height: 24px;
        color: #000000;
        padding-left: 18px;
        :hover {
            background: ${({ theme }) => theme.grayBackground};
        }
    `;
}
