import {MusicCard as Styled} from './styles'
import * as React from 'react';
import Icon from "@/icons/Icon";
import Card from '@mui/material/Card';
import {CollectionExt} from "@/did/model/market";
import {getCurrencyString} from "@/utils/formate";
import {useHistory} from "react-router-dom";
import {useCallback} from "react";
import {ItemCard, CollectionCard} from "@/components";

interface Props {
    collection: CollectionExt;
}

export default ({collection}: Props) => {
    const history = useHistory();
    let {
        floor,
        name,
        creator,
        canisterId,
        logo,
        cover,
        volume,
        index,
        orders,
    } = collection || {};
    if (!canisterId) {
        return <CollectionCard
            collection={undefined}/>
    }
    return (
        <Styled.Card onClick={useCallback(() => {
            history.push(`/music/${String(canisterId)}`)
        }, [canisterId])}>
            <Styled.PlayerContent>
                <Styled.PlayerCover>
                    <Styled.CoverImg>
                        <Styled.Cover src={logo}/>
                        <Styled.AlbumPlayer src='/assets/cd_tou.png'/>
                    </Styled.CoverImg>
                </Styled.PlayerCover>
            </Styled.PlayerContent>
            <Styled.Progress>
                <Styled.ProgressContent>
                    <Styled.AlbumInfo>
                        <Styled.AlbumName>
                            {name}
                        </Styled.AlbumName>
                    </Styled.AlbumInfo>
                    {/*<Styled.PlayerControls>*/}
                    {/*    <Icon  className='icon' name='player' />*/}
                    {/*</Styled.PlayerControls>*/}
                </Styled.ProgressContent>
            </Styled.Progress>
            <Styled.TabWrap>
                <Styled.ColumnWrap>
                    <Styled.VolumeTitleWrap>Volume</Styled.VolumeTitleWrap>
                    <Styled.VolumeWrap>{volume ? getCurrencyString(volume || "", 8, 2) : 0} ICP</Styled.VolumeWrap>
                </Styled.ColumnWrap>
                <Styled.ColumnWrap>
                    <Styled.VolumeTitleWrap>Floor Price</Styled.VolumeTitleWrap>
                    <Styled.VolumeWrap>{floor ? getCurrencyString(floor + "" || "", 8, 2) : 0} ICP</Styled.VolumeWrap>
                </Styled.ColumnWrap>
                <Styled.ColumnWrap>
                    <Styled.VolumeTitleWrap>items</Styled.VolumeTitleWrap>
                    <Styled.VolumeWrap>{orders ? Number(orders) : 0}</Styled.VolumeWrap>
                </Styled.ColumnWrap>
            </Styled.TabWrap>

        </Styled.Card>
    );
}

