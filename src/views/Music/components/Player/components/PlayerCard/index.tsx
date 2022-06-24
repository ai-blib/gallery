import {PlayerCardStyles as Styled} from './styles'
import * as React from "react";
import Icon from "@/icons/Icon";
import {Box} from '@/styles'
import {useEffect, useRef, useState} from "react";
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MoreCard from './MoreCard'
import ArtTrackOutlinedIcon from '@mui/icons-material/ArtTrackOutlined';
import ReactAudioPlayer from '@/utils/Player';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import {musicList} from '@/config'

interface Props {
    list: Array<any>
}

export const PlayerCard = ({list}: Props) => {
    let isChangeMusic = false, currentMusicIndex = 0, musicNumber = list ? list.length : 0;
    const [playing, setPaying] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [currentMusic, setCurrentMusic] = useState<{ attr: any, nftUrl: string, musicNftUrl: string }>(list && list[currentMusicIndex])
    const ProgressRef = useRef<any>(null);
    const [canPlay, setCanPlay] = useState<boolean>(false)
    let isTimerPlaying = false;
    const [time, setTime] = useState<{ currentTime: string, duration: string, BarWidth: string }>({
        currentTime: "00:00",
        duration: "00:00",
        BarWidth: '0'
    })
    let MusicRef: any = null;
    const handlePlay = () => {
        if (!playing) {
            MusicRef?.play()
        } else {
            MusicRef?.pause()
        }
        // MusicRef.play();
        setPaying(!playing)
    }
    const clickProgress = (e) => {
        isTimerPlaying = true;
        MusicRef.pause();
        updateBar(e.clientX);
    }
    const updateBar = (x: number) => {
        let progress = ProgressRef.current;
        let maxduration = MusicRef.duration;
        let position = x - progress.getBoundingClientRect().left;
        let percentage = (100 * position) / progress.offsetWidth;
        if (percentage > 100) {
            percentage = 100;
        }
        if (percentage < 0) {
            percentage = 0;
        }
        setTime((v) => {
            v.BarWidth = percentage + "%";
            return {...v}
        })
        MusicRef.currentTime = (maxduration * percentage) / 100;
        MusicRef.play();
    }
    const generateTime = (time?: number | Event, _canPaly?: boolean) => {
        if (_canPaly) setCanPlay(true);
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
        if (_canPaly && isChangeMusic) {
            setPaying(true);
            MusicRef.play();
        }
    }
    const onEnded = () => {
        setPaying(true);
        MusicRef.play();
    }
    useEffect(() => {
        if (!playing && !isTimerPlaying) {
            setTime((v) => {
                v.currentTime = '00:00';
                v.BarWidth = '0';
                return {...v}
            })
        }
    }, [playing]);
    /**
     *
     * @param _musicIndex  selected Music index
     */
    const changeMusic = (_musicIndex: number) => {
        isChangeMusic = true;
        currentMusicIndex = _musicIndex;
        setCurrentMusic(list[_musicIndex]);
        setCanPlay(false);
        setPaying(false);
        // MusicRef.play();
    }
    /**
     *
     * @param type  play music pre or next
     */
    const changeMusicPreAndNext = (type: 'pre' | 'next') => {
        const musicNumbersIndexs = musicNumber - 1;
        if (type === 'pre') {
            currentMusicIndex--;
            currentMusicIndex = currentMusicIndex >= 0 && currentMusicIndex <= (musicNumbersIndexs) ? currentMusicIndex : musicNumbersIndexs;
        } else if (type === 'next') {
            currentMusicIndex++;
            currentMusicIndex = currentMusicIndex >= 0 && currentMusicIndex <= (musicNumbersIndexs) ? currentMusicIndex : 0;
        }
        setCurrentMusic(list[currentMusicIndex] || list[musicNumbersIndexs]);

    }
    useEffect(() => {
        generateTime()
    }, [currentMusicIndex])

    return (
        <Styled.Wrap>
            {open && <MoreCard list={list} handleSelected={changeMusic}/>}
            <Styled.CardBg src={currentMusic?.nftUrl}/>
            <IconButton aria-label="settings" onClick={() => setOpen(!open)}>
                <AppsOutlinedIcon fontSize='large' style={{color: 'white'}}/>
            </IconButton>
            <Styled.CardTop>
                <Styled.HeartWrap>
                    <Styled.Items>
                        <Icon className='heart-player' name='heart'/>
                    </Styled.Items>
                </Styled.HeartWrap>
                <Styled.CoverWrap>
                    <Styled.CoverImg playing={playing}>
                        <Styled.Cover src={currentMusic?.nftUrl}/>
                    </Styled.CoverImg>
                    <Styled.AlbumPlayer playing={playing} src='/assets/cd_tou.png'/>
                </Styled.CoverWrap>
                <Styled.TitleWrap>
                    <Styled.Name>{currentMusic?.attr?.name}</Styled.Name>
                    <Styled.SubName>
                        Campsite Dream
                    </Styled.SubName>
                    <Styled.PlayerControls>
                        {/*<Styled.Items>*/}
                        {/*    <Icon className='heart-player' name='link'/>*/}
                        {/*</Styled.Items>*/}
                        <Styled.Items onClick={() => changeMusicPreAndNext('pre')}>
                            <Icon className='heart-player' name='music-prev'/>
                        </Styled.Items>
                        <Styled.Items onClick={handlePlay}>
                            {playing ? <Icon className='heart-player' name='pause'/> :
                                <Icon className='heart-player' name='player'/>}
                        </Styled.Items>
                        <Styled.Items onClick={() => changeMusicPreAndNext('next')}>
                            <Icon className='heart-player' name='music-next'/>
                        </Styled.Items>
                    </Styled.PlayerControls>
                    <Box width='100%' jc='flex-end'>
                        <Styled.Time>{time.duration}</Styled.Time>
                    </Box>
                    <Styled.Progress ref={ProgressRef} onClick={clickProgress}>
                        <Styled.Bar width={time.BarWidth}/>
                        <Styled.Pointer/>
                    </Styled.Progress>
                    <Box width='100%'>
                        <Styled.Time>{time.currentTime}</Styled.Time>
                    </Box>
                </Styled.TitleWrap>
                <ReactAudioPlayer ref={(ele) => MusicRef = ele?.audioEl.current}
                                  onEnded={onEnded}
                                  listenInterval={1000}
                                  onListen={(e) => generateTime(e)}
                                  onCanPlay={(e) => generateTime(e, true)}
                                  onPlay={() => setPaying(true)}
                                  src={currentMusic?.musicNftUrl || ''}/>
            </Styled.CardTop>
        </Styled.Wrap>
    )
}
