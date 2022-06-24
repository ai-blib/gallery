import {MusicCard as Styled} from './styles'
import * as React from 'react';
import Icon from "@/icons/Icon";
import {Gap} from '@/components'
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import IconButton from "@mui/material/IconButton";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import ReactAudioPlayer from '@/utils/Player';
import {useState} from "react";
import {Link, useHistory, useParams, useLocation} from "react-router-dom";

export const MusicCard = ({data}: { data: { cover: string, musicUrl: string, name: string } }) => {
    let MusicRef: any = null;
    const history = useHistory();
    const [canPlay, setCanPlay] = useState<boolean>(false)
    const [time, setTime] = useState<{ currentTime: string, duration: string, BarWidth: string }>({
        currentTime: "00:00",
        duration: "00:00",
        BarWidth: '0'
    })
    const generateTime = (time?: number | Event, canPlay?: boolean) => {
        if (canPlay) setCanPlay(true);
        let width = (100 / MusicRef.duration) * MusicRef.currentTime;
        let BarWidth = width + "%";
        // let circleLeft = width + "%";
        let durmin: number | string = Math.floor(MusicRef.duration / 60);
        let dursec: number | string = Math.floor(MusicRef.duration - durmin * 60);
        let curmin: number | string = Math.floor(MusicRef.currentTime / 60);
        let cursec: number | string = Math.floor(MusicRef.currentTime - curmin * 60);
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
    return (
        <Styled.Card>
            <Styled.PlayerContent>
                <Styled.PlayerCover onMouseLeave={handleHoverPause} onMouseOver={handleHoverPlay}>
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
                    <Styled.MusicCollection>
                        <IconButton aria-label="settings">
                            <LibraryMusicOutlinedIcon fontSize='large' style={{color: 'white'}}/>
                        </IconButton>
                    </Styled.MusicCollection>
                </Styled.PlayerCover>
            </Styled.PlayerContent>
            <Styled.Progress>
                <Styled.ProgressContent>
                    <Styled.AlbumInfo>
                        <Styled.AlbumName>
                            {data?.name}
                        </Styled.AlbumName>
                        <Styled.AlbumTrack>
                            Everybody Knows
                        </Styled.AlbumTrack>
                    </Styled.AlbumInfo>

                    <Styled.PriceWrap>
                        <Styled.PerNumber>0.00</Styled.PerNumber>
                        <Styled.Per>
                            <Icon name="ICPNoOutline"/>
                            ICP
                        </Styled.Per>
                    </Styled.PriceWrap>
                </Styled.ProgressContent>
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

