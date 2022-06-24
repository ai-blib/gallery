import styled from 'styled-components';
export namespace WalletStyles {
    export const Container = styled('div')`
                    width: 100%;
                    height: 100%;
                    padding: 24px;
                    padding-top: 103px;
       `
    export const Title = styled('h4')`
            font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 29px;
            /* identical to box height */
            
            display: flex;
            align-items: center;
            text-align: center;
            letter-spacing: -0.02em;
            
            /* Grey/10 */
              
            color: #000000;
`
     export const SubTitle = styled('h4')`
          
                font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
                font-style: normal;
                font-weight: bold;
                font-size: 12px;
                line-height: 160%;
                /* or 19px */
                
                display: flex;
                align-items: center;
                
                /* Grey/4 */
                
                color: #696969;

`
 export const UlWrap = styled('ul')`
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              
`
    export const WalletItem = styled('li')`
              width: 100%;
              height: 56px;
              cursor: pointer;
              border: 1px solid #D3D3D3;
                box-sizing: border-box;
                border-radius: 42px;
                
                
                /* Inside Auto Layout */
                
                flex: none;
                order: 1;
                flex-grow: 0;
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 0 10px;
                &:hover{
                    transition: all 0.2s ease 0s;
                    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
                    background-color: rgb(251, 253, 255);
                }
                
`
export const Avatar = styled('div')`
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid #D3D3D3;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
`
    export const Text = styled('span')`
            font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 160%;
            /* identical to box height, or 26px */
            
            display: flex;
            align-items: center;
            text-align: center;
            
            /* Grey/10 */
            
            color: #000000;
            margin-left: 40px;
`
}
