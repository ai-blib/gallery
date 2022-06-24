import {MusicCard as Styled} from './styles'
import * as React from 'react';
import Icon from "@/icons/Icon";
import {Gap, ItemCard} from '@/components'
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import IconButton from "@mui/material/IconButton";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import ReactAudioPlayer from '@/utils/Player';
import {useEffect, useState} from "react";
import {Link, useHistory, useParams, useLocation} from "react-router-dom";
import {getCurrencyString} from "@/utils/formate";
import {Box} from '@/styles';
import {MarketApi} from "@/apis";
import {toast} from "react-toastify";

interface Props {
    id: string | number,
    collectionId: string | any,
    cover: string,
    musicUrl: string,
    name: string,
    type?: 'sell' | 'buy' | undefined,
    price: string | number | undefined
    index?: string | number | any
}

export const MusicCard = ({data, handleRightBuy}: { handleRightBuy?: (e: any) => void, data: Props }) => {
    let MusicRef: any = null;
    const [canPlay, setCanPlay] = useState<boolean>(false);
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const history = useHistory();
    const [time, setTime] = useState<{ currentTime: string, duration: string, BarWidth: string }>({
        currentTime: "00:00",
        duration: "00:00",
        BarWidth: '0'
    })
    const addFavorite = async () => {
        let call;
        debugger
        console.log(data.collectionId + "", 'data.collectionId')
        if (isFavorite) {
            call = MarketApi.removeFavorite(data.collectionId, data?.index);
        } else {
            call = MarketApi.addFavorite(data.collectionId, data?.index);

        }
        const result: any = await toast.promise(call, {
            pending: 'order is pending',
            success: 'order success 👌',
            error: {render: ({data}: any) => (`${data.err || data} err 🤯`)}
        });
        if (result.err) {
            setIsFavorite(false);
            return;
        }
        setIsFavorite(true);
    }

    const onClickIcon = (e) => {
        e.stopPropagation();
        addFavorite()
        const player = document.getElementById('player');
        const cartoon = document.getElementById('heart-o');
        if (!cartoon) {
            return;
        }
        // 设置初始位置为商品图片的位置
        cartoon.setAttribute('style', `display:block;position: fixed; top: ${e.target.getBoundingClientRect().y}px; left: ${e.target.getBoundingClientRect().x}px;`);
        // 设置抛物线动画的结束位置，加上transition属性，这里的top 和 left要和之前设置的对应
        setTimeout(() => {
            // @ts-ignore
            cartoon.setAttribute('style', `display:block;position: fixed;z-index:1000000; top:${player.getBoundingClientRect().y}px; left: ${player.getBoundingClientRect().x}px; transition: left 1s linear, top 1s ease-out;`);
        }, 10);
        // 等动画使用的图标到达指定位置后，使其消失，setTimeout的时间为动画时间+上一个setTimeout时间
        setTimeout(() => {
            cartoon.setAttribute('style', 'display: none');
        }, 1100)
    };
    const generateTime = (time?: number | Event, canPaly?: boolean | undefined) => {
        if (!MusicRef.duration || !MusicRef) {
            return;
        }
        if (canPaly) setCanPlay(true);
        let width = (100 / MusicRef?.duration) * MusicRef?.currentTime;
        let BarWidth = width + "%";
        // let circleLeft = width + "%";
        let durmin: number | string = Math.floor(MusicRef?.duration / 60);
        let dursec: number | string = Math.floor(MusicRef?.duration - durmin * 60);
        let curmin: number | string = Math.floor(MusicRef?.currentTime / 60);
        let cursec: number | string = Math.floor(MusicRef?.currentTime - curmin * 60);
        if (durmin < 10) {
            durmin = "0" + durmin;
        }
        if (dursec < 10) {
            dursec = "0" + dursec;
        }
        if (curmin < 10) {
            curmin = "0" + curmin;
        }
        if (cursec < 10) {
            cursec = "0" + cursec;
        }
        setTime((v) => {
            v.duration = durmin + ":" + dursec;
            v.currentTime = curmin + ":" + cursec;
            v.BarWidth = BarWidth;
            return {...v}
        })

    }
    const handleHoverPlay = () => {

        canPlay && MusicRef.play();
    }
    const handleHoverPause = () => {
        canPlay && MusicRef.pause();
    }
    const handleButtonClick = () => {
        if (data.type === 'sell') {
            history.push(`/detail/${data.collectionId + ""}/${data.id}`)
        }
    }
    useEffect((): any => {
        let isUnmount = false;

        (async () => {
            !isUnmount && data.collectionId && setIsFavorite(!!await MarketApi.isFavorite(data.collectionId, data.index));
        })()
        return () => isUnmount = true
    }, [data.index, data.collectionId]);
    if (!data.collectionId) {
        return <ItemCard
            collectionId={undefined}
            key={undefined}
            id={
                undefined
            }
            nftInfo={undefined}
        />
    }
    return (
        <Styled.Card>
            <Styled.PlayerContent>
                <Styled.PlayerCover
                    onClick={() => data.type && data.type === 'buy' && history.push(`/detail/${data.collectionId + ""}/${`${data.id}_${data?.index}`}`)}
                    onMouseLeave={handleHoverPause} onMouseOver={handleHoverPlay}>
                    <Styled.CoverImg src={data.cover}>
                        {canPlay && <Styled.CoverWrap>
                            <Styled.CoverAlbum>
                                <Styled.Cover src={data.cover}/>
                            </Styled.CoverAlbum>
                            <Styled.AlbumPlayer src='/assets/cd_tou.png'/>
                        </Styled.CoverWrap>}
                        {canPlay && <Styled.PlayerControls>
                            <Styled.Items>
                                <Icon className='heart' name='music-prev'/>
                            </Styled.Items>
                            <Gap width={20}/>
                            <Styled.Items>
                                <Icon className='heart' name='player'/>
                            </Styled.Items>
                            <Gap width={10}/>
                            <Styled.Items>
                                <Icon className='heart' name='music-next'/>
                            </Styled.Items>
                        </Styled.PlayerControls>}
                        {/*<Icon className='player' name='player'/>*/}
                    </Styled.CoverImg>
                    <Styled.MusicCollection onClick={onClickIcon}>
                        <Styled.Items isFavorite={isFavorite}>
                            {isFavorite ? <Icon className='heart' name='heart-o'/> :
                                <Icon className='heart' name='heart'/>}
                        </Styled.Items>
                    </Styled.MusicCollection>
                </Styled.PlayerCover>
            </Styled.PlayerContent>
            <Styled.Progress>
                <Styled.ProgressContent>
                    <Styled.AlbumInfo>
                        <Styled.AlbumName>
                            {data?.name}
                        </Styled.AlbumName>
                    </Styled.AlbumInfo>
                    {
                        data.type && <Box>
                            {data.price ? <Styled.PriceWrap>
                                    <Styled.PerNumber>{data.price && getCurrencyString(data.price, 8, 2)}</Styled.PerNumber>
                                    <Styled.Per>
                                        <Icon name="ICPNoOutline"/>
                                        ICP
                                    </Styled.Per>
                                </Styled.PriceWrap> :
                                <Styled.OutlinedButton onClick={handleButtonClick}>Sell</Styled.OutlinedButton>}
                        </Box>}
                </Styled.ProgressContent>
                {data.price && data.type && data.index && <Box width='100%' d='row' jc='center'>
                    <Styled.OutlinedButton onClick={handleRightBuy}>Buy Now</Styled.OutlinedButton>
                </Box>}
                <Styled.ProgressBar/>
                <Styled.ProgressTime>
                    {time.duration}
                </Styled.ProgressTime>
            </Styled.Progress>
            <ReactAudioPlayer ref={(ele) => MusicRef = ele?.audioEl.current}
                              listenInterval={1000}
                              onListen={(e) => generateTime(e)}
                              onCanPlay={(e) => generateTime(e, true)}
                              src={data?.musicUrl}/>
        </Styled.Card>
    );
}

