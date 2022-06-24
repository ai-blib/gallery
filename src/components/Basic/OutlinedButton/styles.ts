import styled from "styled-components";
export namespace OutlinedButtonStyles {
    export const OutlinedButton = styled.div<{
        width?: number;
        noOutline?: boolean;
    }>`
        width: ${({ width }) => width || 120}px;
        height: 40px;
        background: #ffffff;
        box-sizing: border-box;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    `;
    export const ContentWrap = styled.div`
        font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 160%;
        /* identical to box height, or 26px */
        display: flex;
        align-items: center;
        text-align: center;
        color: rgba(0, 0, 0, 0.88);
    `;
}
