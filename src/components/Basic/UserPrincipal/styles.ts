import styled from "styled-components";

export namespace UserPrincipalStyles {
    export const UserPrincipal = styled.div`
        width: 400px;
        height: 68px;
        background: #efefef;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 8px 16px;
        border-radius: 12px;
    `;
    export const PrincipalId = styled.div`
        width: 100px;
        font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 160%;
        /* identical to box height, or 26px */
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.6);
    `;
    export const PrincipalContent = styled.div`
        font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 160%;
        /* identical to box height, or 26px */
        display: flex;
        align-items: center;
        color: #000000;
    `;
    export const Cursor = styled("span")`
        cursor: pointer;
        display: contents;
    `;
}
