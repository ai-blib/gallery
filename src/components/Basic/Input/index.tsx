import {InputStyles as Styled} from './styles'
import TextField, {TextFieldProps} from '@mui/material/TextField';


export const Input = (props: TextFieldProps | any) => {
    return (
        <Styled.InputWrap>
            <TextField   {...props} />
        </Styled.InputWrap>
    )
}
