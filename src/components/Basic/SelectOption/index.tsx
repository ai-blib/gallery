import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import {SelectOptionStyles as Styled} from './styles'

interface Props {
    options: Array<any>;
    onChange: (e: any, a: any) => any
}

export const SelectOption = ({options, onChange}: Props) => {
    return (
        <Styled.Wrap>
            <Stack spacing={2} sx={{width: 200}}>
                <Autocomplete
                    size='small'
                    onChange={onChange}
                    sx={{borderRadius: 10}}
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={options.map((option) => option?.title)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Sort by"
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                            }}
                        />
                    )}
                />
            </Stack>
        </Styled.Wrap>
    );
}

