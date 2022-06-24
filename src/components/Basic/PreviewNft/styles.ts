import styled from "styled-components";

export namespace FileStyles {
    export const Title = styled('span')`
                  width: 100%;
                 font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
                font-style: normal;
                font-weight: bold;
                font-size: 18px;
                line-height: 160%;
                color: ${({theme})=>theme.fontcolor};
                padding-bottom: 9px;
               
`
    export const Container = styled('div')`
                 width: 100%;
                 height: 100%;
                 display: flex;
                 flex-direction: row;
                 justify-content: center;
                 padding-left:122px;
                 padding-top: 51px;
`
    export const RightContent = styled('div')<{ width?: number }>`
                 width: ${({width}) => width ? width + 'px' : "100%"};
                 height: 100%;
                 display: flex;
                 align-items: center;
                 flex-direction: column;
`
    export const PreviewCard = styled('div')`
                width: 100%;
                height: 411px;
                background: rgba(255, 255, 255, 0.5);
                /* Neutral/100 */
                border: 1px solid ${({theme})=>theme.cardBorder};
                box-sizing: border-box;
                /* Back Blur */
                backdrop-filter: blur(40px);
                /* Note: backdrop-filter has minimal browser support */
                border-radius: 20px;
                padding: 12px ;
`
    export const ContentWrap = styled('div')`
                  width: 100%;
                  height: 282px;
                  border-radius: 10px;
                  overflow: hidden;
`
    export const ContentImg = styled('img')`
                   width: 100%;
                   height: 100%;
                   object-fit: cover;

`
    export const InfoTitle = styled('div')`
                  width: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
`
    export const InfoSpan = styled('div')`
                  font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
                    font-style: normal;
                    font-weight: bold;
                    font-size: 14px;
                    line-height: 160%; 
                    color: #000000;
`
}