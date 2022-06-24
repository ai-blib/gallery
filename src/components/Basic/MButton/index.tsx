import React, {useCallback, useState} from 'react';
import {Button, ButtonProps, CircularProgress} from '@mui/material';
import './index.less'
import {AccountBalanceWallet} from "@mui/icons-material";

interface Props{
    children:any,
    onClick:() => void,
    icon?:any,
    isApprove?:boolean|any,
    loading?:Boolean,
    disabled?:Boolean|undefined
};
export  const NFTButton = (props: Props)=>{
    let {children,onClick,isApprove,disabled,icon} = props;
    const [loading,setLoading] = useState(false);
    if (isApprove===undefined){
        isApprove = true;
    }
    const handleClick =useCallback((e)=>{
        // @ts-ignore
        const result = onClick &&onClick(e);
        // @ts-ignore
        if (result instanceof Promise) {
            setLoading(true);
            // @ts-ignore
            result.then(completed => {
                console.log(completed, 'completed');
                if (completed) {
                    setLoading(false);
                }
            });
        }
    },[onClick])
    return <div className='m-button'>
        <Button
            onClick={handleClick}
            variant="contained"
            color="secondary"
            className='n-button'
            disabled={!!disabled||loading}
            startIcon={icon||<AccountBalanceWallet />}
        >
            {loading?<CircularProgress
            size={14}
            color="inherit"
        />:(isApprove?children:'Approve')}
        </Button>
    </div>
}
