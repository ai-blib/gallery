import styled from "styled-components";

export namespace UploadImgStyles {
    export const UploadFile = styled('div')`
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
`
    export const Title = styled('div')`
                font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 160%;
            /* identical to box height, or 26px */
            text-align: center;
            /* Neutral/80 */
            color: ${({theme}) => theme.grayColor};
`
    export const UploadButton = styled('div')`
             border-radius: 20px;
             padding: 0 33px;
             height: 40px;
             background: #C4C4C4;
             display: flex;
             align-items: center;
             justify-content: center;
             border: none;
             cursor: pointer;
             font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
                font-style: normal;
                font-weight: 900;
                font-size: 16px;
                line-height: 160%;
                /* identical to box height, or 26px */
                
                text-align: center;
                
                color: #151515;

`
    export const PreviewImg = styled('img')`
                 width: 100%;
                 height: 100%;
                 object-fit: cover;
`
}
