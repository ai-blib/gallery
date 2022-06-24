import React, {useEffect} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import './index.less'


 interface DialogTitleProps  {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}
const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
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
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};





interface Props {
    visible:boolean;
    header:string;
    children:JSX.Element|any;
    className?:string;
    onClose:()=>void,buttonComponent?:any
}
export  const Dialogs = (props:Props)=> {
  const  {visible,header,children,onClose,buttonComponent,className} = props;
    const [open, setOpen] = React.useState(false);

    useEffect(()=>{
        setOpen(visible);
    },[visible])

    const handleClose = () => {
        setOpen(false);
        onClose&&onClose()
    };
    return (
        <div>
            {/*<Button variant="outlined" color="primary" onClick={handleClickOpen}>*/}
            {/*    Open dialog*/}
            {/*</Button>*/}
            <Dialog className={`dialogs-modal ${className}`} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                {/*<BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>*/}
                {/*    {header}*/}
                {/*</BootstrapDialogTitle>*/}
                <DialogContent dividers>
                    {children}
                </DialogContent>
                {buttonComponent?<DialogActions >
                    {/*<Button autoFocus onClick={handleClose} color="primary">*/}
                    {/*    Save changes*/}
                    {/*</Button>*/}
                    {buttonComponent}
                </DialogActions>:""}
            </Dialog>
        </div>
    );
};
