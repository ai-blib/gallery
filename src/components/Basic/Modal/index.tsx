import React, {useEffect,memo,useState} from 'react';
import {styled} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Icon from "@/icons/Icon";
import Zoom from '@mui/material/Zoom';
import { TransitionProps } from '@mui/material/transitions';

import './index.less'

const BootstrapDialog = styled(Dialog)(({theme}) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Zoom  ref={ref} {...props} />;
});
const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const {children, onClose, ...other} = props;

    return (
        <DialogTitle sx={{m: 0, p: 2,borderBottom:'1px solid #EFEFEF'}} {...other} >
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <Icon name='close' />
                </IconButton>
            ) : null}
        </DialogTitle>

    );
};


interface Props {
    visible: boolean;
    header: string;
    children: JSX.Element | any;
    className?: string;
    onClose: any;
    buttonComponent?: any,
}

export const Modal = memo((props: Props) => {
    const {visible, header, children, onClose, buttonComponent, className} = props;
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(visible);
    }, [visible])

    const handleClose = () => {
        setOpen(false);
        onClose && onClose()
    };
    return (
        <BootstrapDialog
            keepMounted={true}
            aria-labelledby="customized-dialog-title"
            open={open}
            disableEscapeKeyDown={true}
            TransitionComponent={Transition}
            className={`dialogs-modal ${className}`}
        >
            {onClose && <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                {header}
            </BootstrapDialogTitle>}
            <DialogContent>
                {children}
            </DialogContent>
            {buttonComponent ? <DialogActions sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                {buttonComponent}
            </DialogActions> : ""}
        </BootstrapDialog>
    );
});
