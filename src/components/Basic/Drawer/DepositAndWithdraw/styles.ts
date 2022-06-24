import styled from "styled-components";
import TextField from "@mui/material/TextField";

export namespace MintModalStyles {
    export const Wrap = styled('div')`
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
`
    export const InputWrap = styled('div')`
             width: 100%;
             height: 50px;
             margin-bottom: 20px;
             .css-1u3bzj6-MuiFormControl-root-MuiTextField-root{
                 width: 100%;
             }
             .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root{
                border-radius: 10px;
             }
`
    export const ButtonContainer = styled('div')`
             min-width: 120px;
             display: flex;
             flex-direction: row;
             height: 40px;
`
    export const ButtonWrap = styled('div')`
             width: 100%;
             display: flex;
             align-items: center;
             justify-content: center;
             margin: 20px 0;
`
    export const Info = styled('ul')`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: space-between;
              margin-top: 10px;
`
    export const ItemTitle = styled('span')`
            font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 160%;
            /* or 22px */
            
            display: flex;
            align-items: center;
            
            /* Grey/4 */
            
            color: #696969;
            margin-bottom: 8px;
`
    export const Item = styled('span')`
            flex: 1;
            
            font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
            font-style: normal;
            font-weight: bold;
           
            font-size: 18px;
            line-height: 160%;
            /* identical to box height, or 29px */
            display: flex;
            align-items: center;
            justify-content: flex-end;
            /* Text/main */
            color: rgba(0, 0, 0, 0.88);
`
    export const SelectWrap = styled('div')`
            width: 120px;
            height: 58px;
            border: 1px solid #EFEFEF;
            box-sizing: border-box;
            border-radius: 16px;   
            display: flex;
            align-items: center;
            justify-content: center; 
`
    export const Name = styled('span')`
            font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 160%;
            /* identical to box height, or 29px */
            
            display: flex;
            align-items: center;
            
            color: #4A4A4A;
`
    export const ItemLine = styled('div')`
           font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 160%;
            /* or 22px */
            
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            /* Grey/4 */
            
            color: #696969;
            margin-top: 10px;
`
    export const ItemS = styled('span')`
               font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
                font-style: normal;
                font-weight: bold;
                font-size: 14px;
                line-height: 160%;
                /* or 22px */
                
                display: flex;
                align-items: center;
                text-align: right;
                
                /* Grey/10 */
                
                color: #000000;
                margin-left: 10px;
`
    export const Max = styled('span')`
                font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 32px;
                /* identical to box height, or 200% */
                
                display: flex;
                align-items: center;
                text-align: right;
                color: #3366FF;
                cursor: pointer;
                &:hover{
                    opacity: 0.8;
                }
                


`
    export const Cancel = styled('div')`
                width: 120px;
                height: 40px;
                font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
                line-height: 160%;
                /* identical to box height, or 26px */
                border: 1px solid #EFEFEF;
                display: flex;
                align-items: center;
                justify-content: center;
                
                /* Text/main */
                
                color: rgba(0, 0, 0, 0.88);
                border-radius: 20px;
                cursor: pointer;
`
}

