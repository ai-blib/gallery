import styled from "styled-components";
export namespace AvatarStyles {
    export const Back = styled('button')`
              min-width: 112px;
              height: 40px;
              box-sizing: border-box;
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0 16px;
              border: solid 1px ${({theme})=>theme.borderColor};
              border-radius: 20px;
              background: #FFFFFF;
              font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 160%;
            /* identical to box height, or 29px */
            
            
            /* Grey/4 */
            
            color: #696969;
            cursor: pointer;

`
}
