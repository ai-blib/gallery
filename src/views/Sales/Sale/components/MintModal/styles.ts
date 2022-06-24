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
             height: 40px;
`
    export const ButtonWrap = styled('div')`
             width: 100%;
             display: flex;
             align-items: center;
             justify-content: center;
             margin-bottom: 20px;
`
    export const Info = styled('ul')`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              margin-top: 10px;
`
    export const ItemTitle  =styled('span')`
            font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 160%;
            /* identical to box height, or 29px */
            display: flex;
            align-items: center;
            /* Text/secondary */
            color: rgba(0, 0, 0, 0.8);
`
    export const Item  =styled('span')`
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
    export const ItemLine = styled('div')`
            width: 100%;
            height: 1px;
            background: #EFEFEF;
            margin: 10px 0;
`
    export const Line = styled('div')`
            width: 100%;
            height: 1px;
            background-color: #EFEFEF;
            margin: 10px 0;

`
    export const SmallSpan = styled('div')`
           width: 100%;
          font-family: "IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 22px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        color: #696969;
        margin-top: 10px;
`
}

