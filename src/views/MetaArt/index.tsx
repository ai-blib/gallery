import {MetaArtStyles as Styled} from './styles'
import React, {useCallback, useEffect, useState} from "react";
// import Univarse from "./univarse";
import {ButtonTabs, Gap, MainButton} from "@/components";
import storage from "@/utils/storage";
import {CollectionExt} from "@/did/model/market";
import {useCollectionsInfoStore} from "@/redux";
import {useParams} from "react-router-dom";
import {Box} from "@mui/material";
import {MarketApi} from "@/apis";
import {EnterWorld, Buy} from './components'
import {IsPC} from '@/utils/formate'
import Game from './Gallery/game'
// import GalleryPerson from './GalleryPerson'
// import GalleryUnivarse from './Gallery'

let instance: any = null;
let isMobile = !IsPC();
export const MetaArt = () => {
    const {list} = useCollectionsInfoStore();
    const {collectionId}: { collectionId: string } = useParams();
    const [loaded, setLoaded] = useState<boolean>(false)
    const [info, setInfo] = useState<CollectionExt | null>();
    const [enterWorld, setEnterWorld] = useState<boolean>(false);
    const [tokenInfo, setTokenInfo] = useState<any>()
    const handleEnterWorld = useCallback((r) => setEnterWorld(r), []);
    const handleClose = useCallback(async () => {
        setTokenInfo(null);
        await refresh()
    }, [])
    const handleSelected = useCallback((index: number, source: Object) => {
        if (source) {
            setTokenInfo(source)
        }
    }, [])
    useEffect(() => {
        if (list && instance) {
            instance.createArtExhibition(list)
        }
    }, [list]);
    const refresh = async () => {
        MarketApi.getCollectionInfo(collectionId).then((res) => setInfo(res[0]))
        await MarketApi.getCollectionOrders(collectionId)
    }
    const onComplete = () => {
        setLoaded(true)
    }
    useEffect(() => {
        (async () => {
            await refresh()
        })();
        new Game();
       // new GalleryPerson(handleSelected, onComplete)
        // new GalleryUnivarse(handleSelected, onComplete);
        // instance = new Univarse(handleSelected, onComplete);
        // return () => instance && instance.hiddenPlayer();
    }, []);
    return (
        <Styled.Wrap>
            {/*{!isMobile && <Box>*/}
            {/*    <EnterWorld info={info} enterWorld={enterWorld} handleEnterWorld={handleEnterWorld}/>*/}
            {/*    {enterWorld && <Styled.Layout>*/}
            {/*        <Box width={150}>*/}
            {/*            <MainButton onClick={() => setEnterWorld(false)}>*/}
            {/*                Leave*/}
            {/*            </MainButton>*/}
            {/*        </Box>*/}
            {/*    </Styled.Layout>*/}
            {/*    }*/}
            {/*    {tokenInfo && <Buy tokenInfo={tokenInfo} open={!!tokenInfo} handleClose={handleClose}/>}*/}
            {/*</Box>}*/}

            <Styled.Univarse id='three'/>
            {/*{!loaded && <Styled.BgIframe>*/}
            {/*    <iframe src="https://www.jq22.com/js/a5.html"/>*/}
            {/*</Styled.BgIframe>}*/}
            {/*<Styled.TurBox>*/}
            {/*    <Styled.PriceTitleWrap>*/}
            {/*        Click Art Nft for Detail*/}
            {/*    </Styled.PriceTitleWrap>*/}
            {/*</Styled.TurBox>*/}
        </Styled.Wrap>
    )
}
