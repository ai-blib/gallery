import {DetailStyles as Styled} from "@/views/Detail/styles";
import {Skeleton} from "@mui/material";
import React from "react";
import {MusicCard} from "@/views/Music/components";

interface Props {
    tokenInfo: any
}

export const NftDisplay = ({tokenInfo}: Props) => {
    if (!tokenInfo?.nftUrl) {
        return (<Styled.NftDisplay>
            <Skeleton sx={{transform: 'none'}} animation='wave' width='100%' height={400}/>
        </Styled.NftDisplay>);
    }
    if (tokenInfo.musicNftUrl) {
        return <Styled.NftDisplay> <MusicCard data={{
            index: tokenInfo.index,
            price: tokenInfo.price,
            collectionId: tokenInfo.token || tokenInfo.collectionId,
            id: tokenInfo.id,
            cover: tokenInfo.nftUrl,
            musicUrl: tokenInfo.musicNftUrl,
            name: tokenInfo?.attr?.name,
        }}/>
        </Styled.NftDisplay>
    }
    return (<Styled.NftDisplay>
            <img className='inner' src={tokenInfo?.nftUrl} alt=""/>
        </Styled.NftDisplay>
    )
}
