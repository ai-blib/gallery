import {Box} from "@/styles";
import {PropertiesStyles as Styled} from './styles'
import React, {useState} from "react";
import IconButton from "@mui/material/IconButton";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import './index.less';
interface closeProps {
    onClose: Function
}

export type Status = 'display' | 'edit'

interface Props {
    status?: Status;
    propertiesList?:Array<any>;
    remove?:Function;
}

export const Properties = ({status,propertiesList,remove}: Props) => {
    propertiesList=propertiesList||[];
    propertiesList = typeof propertiesList ==='string'?JSON.parse(propertiesList):propertiesList;
    status = status || 'display';
    return (
        <Box d='column' width='100%'>
            {status === 'display' ? propertiesList?.length ? <Styled.MainTitle>
                Properties
            </Styled.MainTitle> : "" : ""}
            <Styled.List>
                {
                    (propertiesList||[]).map(({name,desc},index) => {
                        return (
                            <Styled.Item key={index}>
                                <Styled.SubTitle>{name}</Styled.SubTitle>
                                <Styled.ContextTitle>
                                    {desc}
                                </Styled.ContextTitle>
                                {remove&& <IconButton
                                    aria-label="close"
                                    onClick={()=>remove(name)}
                                    sx={{
                                        position: 'absolute',
                                        right: 8,
                                        top: 8,
                                        color: (theme) => theme.palette.grey[500],
                                    }}
                                >

                                    <RemoveCircleIcon />
                                </IconButton>}
                            </Styled.Item>
                        )
                    })
                }
            </Styled.List>
        </Box>
    )
}
