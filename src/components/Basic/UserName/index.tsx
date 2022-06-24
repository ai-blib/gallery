import {UsernameStyles as Styles} from './styles'
import React, {memo, useEffect, useState} from "react";
import {Input} from '@/components'
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import {MarketApi} from '@/apis'
import {Skeleton} from "@mui/material";
import {useAuth} from "@/usehooks/useAuth";
import CheckIcon from '@mui/icons-material/Check';

interface Props {
    name: string | undefined,
    user?: string
}

export const Username = memo(({name, user}: Props) => {
    const {principal} = useAuth();
    const enableEdit = !user ? true : String(principal) === user;
    const [edit, setEdit] = useState<boolean>(false);
    const [userName, setUserName] = useState<string | undefined>(name);
    const handleChange = (e) => setUserName(e.target.value);
    name = userName || name;

    const handleConfirm = async () => {
        setEdit(!edit)
        if (userName && !edit) {
            await MarketApi.setUserName(userName)
        }
    }
    //loading
    if (name === undefined) {
        return <Styles.UsernameWrap> <Skeleton width={100} height={50}/></Styles.UsernameWrap>
    }
    return (
        <Styles.UsernameWrap>

            {!edit ? name : <Input style={{height: 40, marginLeft: 50}} onChange={handleChange} value={userName}/>}
            {enableEdit && <IconButton
                onClick={handleConfirm}
                sx={{color: 'black', margin: 1.5}}
                aria-label={`star`}
            >
                {!edit ? <EditIcon sx={{color: "#C9C9C9"}}/>
                    : <CheckIcon fontSize='medium' sx={{color: "#C9C9C9"}}/>}
            </IconButton>}
        </Styles.UsernameWrap>
    )
});
