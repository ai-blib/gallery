import * as React from 'react';
import {styled} from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const AntTabs = styled(Tabs)({
    '& .MuiTabs-flexContainer': {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },
    borderBottom: '1px solid #e8e8e8',
    '& .MuiTabs-indicator': {
        backgroundColor: '#007FFF',
    },
});

const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
    ({theme}) => ({
        textTransform: 'none',
        minWidth: 0,
        [theme.breakpoints.up('sm')]: {
            minWidth: 0,
        },
        fontWeight: 'bold',
        fontSize:14,
        marginRight: theme.spacing(1),
        color: 'rgba(0, 0, 0, 0.85)',
        '&:hover': {
            color: '#007FFF',
            opacity: 1,
        },
        '&.Mui-selected': {
            color: '#007FFF',
            fontWeight: 'bold',
        },
        '&.Mui-focusVisible': {
            backgroundColor: '#007FFF',
        },
    }),
);


interface StyledTabProps {
    label: string;
}

interface Props {
    children?: React.ReactNode;
    value: number | string;
    onChange: Function;
    labels: Array<string>;
}

export const SelectedTab = ({value, onChange, labels,children}: Props) => {
    return (
        <Box sx={{width: '100%'}}>
            <Box>
                <AntTabs value={value} onChange={(v, value) => onChange(value)} aria-label="ant example">
                    {
                        labels.map((label: string, index: number) => (
                            <AntTab key={index} label={label}/>
                        ))
                    }
                </AntTabs>
                {children ? children : <Box sx={{p: 3}}/>}
            </Box>
        </Box>
    );
}
