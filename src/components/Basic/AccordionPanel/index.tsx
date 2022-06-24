import * as React from 'react';
import {styled} from '@mui/material/styles';
import {AccordionPanelStyle as Styled} from './styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import {useState} from 'react'
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Box} from '@/styles'
const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    width: "100%",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 6,
    backgroundColor: "transparent",
    overflow: 'hidden',
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

interface Props {
    description: string | JSX.Element;
    title: string;
    icon?: JSX.Element
}

export const AccordionPanel = ({description, title, icon}: Props) => {
    const [expanded, setExpanded] = useState<boolean>(true);
    const handleChange = () => {
        setExpanded(!expanded);
    };
    return (
        <Styled.Wrap>
            <Accordion expanded={expanded} onChange={handleChange}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1bh-content"
                >
                    {icon || ''} <Typography className='d-title'>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {description}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Styled.Wrap>
    );
}
