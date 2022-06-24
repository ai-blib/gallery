import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface Props {
    options: Array<string>,
    onChange: (e?: any) => any,
    label: string | React.ReactElement
}

export const Options = ({options, onChange, label}: Props) => {
    const [value, setValue] = React.useState<string | null>(options[0]);
    const [inputValue, setInputValue] = React.useState('');

    return (
        <div>
            <Autocomplete
                value={value}
                onChange={(event: any, newValue: string | null) => {
                    setValue(newValue);
                    onChange && onChange(newValue)
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                sx={{width: 300}}
                renderInput={(params) => <TextField {...params} label={label}/>}
            />
        </div>
    );
}
