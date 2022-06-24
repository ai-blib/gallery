import {MoreCardStyles as Styled} from './styles'
import AudiotrackOutlinedIcon from '@mui/icons-material/AudiotrackOutlined';
import ArtTrackOutlinedIcon from "@mui/icons-material/ArtTrackOutlined";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import {musicList} from '@/config'
import {useEffect, useState} from "react";

interface Props {
    handleSelected: Function;
    list: Array<any>
}

export default ({handleSelected, list}: Props) => {
    const [selected, setSelected] = useState<Object | any>(list && list[0]);
    useEffect(() => {
        handleSelected(selected)
    }, [selected]);

    return (
        <Styled.Wrap>
            <Styled.List>
                {
                    (list || []).map((_item, index) => (
                        <Styled.MusicItem key={index} onClick={() => setSelected(index)}>
                            <Styled.CardLogo src={_item?.nftUrl}/>
                            <Styled.TitleWrap>
                                <Styled.Name>
                                    {_item?.attr?.name}
                                </Styled.Name>
                            </Styled.TitleWrap>
                            {selected?.id === _item?.id ? <IconButton aria-label="settings">
                                <AudiotrackOutlinedIcon fontSize='large' style={{color: 'white'}}/>
                            </IconButton> : null}
                        </Styled.MusicItem>

                    ))
                }
            </Styled.List>
        </Styled.Wrap>
    )
}
