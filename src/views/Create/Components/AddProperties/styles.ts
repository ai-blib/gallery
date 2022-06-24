import styled from "styled-components";
import TextField from "@mui/material/TextField";

export namespace AddPropertiesStyles {
    export const Wrap = styled('div')`
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              padding: 10px;
`
    export const InputWrap = styled('div')`
             width: 100%;
             height: 50px;
             margin-bottom: 20px;
             .MuiTextField-root{
               width: 100%!important;
             }
             .css-1u3bzj6-MuiFormControl-root-MuiTextField-root{
                 width: 100%;
             }
             
             .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root{
                border-radius: 10px;
             }
             .css-1kty9di-MuiFormLabel-root-MuiInputLabel-root.Mui-focused{
               color: ${({theme})=>theme.mainColor};
             }
`
    export const ButtonContainer = styled('div')`
             width: 120px;
             height: 40px;
`
    export const ButtonWrap = styled('div')`
             width: 100%;
             display: flex;
             align-items: center;
             justify-content: center;
             margin-bottom: 20px;
             
`
   export const ValidationTextField = styled(TextField)({

        '& input:valid + fieldset': {
            borderColor: '#C9C9C9',
            borderWidth: 1,
        },
        '& input:invalid + fieldset': {
            borderColor: "#007FFF",
            // borderColor: '#C9C9C9',
            borderWidth: 1,
        },
        '& input:valid:focus + fieldset': {
            borderColor: '#007FFF',
            borderLeftWidth: 6,
            padding: '4px !important', // override inline-style
        },
    });
}

