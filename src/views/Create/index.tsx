import {CreateStyles as Styled} from './styles';
import {Gap} from '@/components'
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Box} from '@/styles'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

interface Props extends RouteComponentProps {
}

import React, {useCallback} from "react";

export default withRouter(({history}: Props) => {
    const goBack = useCallback(() => {
        history.goBack();
    }, [history])
    return (
        <Styled.Wrap>
            <Styled.Header>
                {/*<BackButton onClick={goBack}/>*/}
                <Styled.HeaderTitle>
                    Create new item.
                </Styled.HeaderTitle>
                <Styled.SubTitle>
                    If you would like to release your item or collection of NFTs on the iMart then please complete the
                    following Application form.
                </Styled.SubTitle>
            </Styled.Header>
            <Styled.Container>
                <Box d='column' ai='center' jc='center' onClick={() => history.push('/create/item/art')}>
                    <Styled.MainTitle>Art</Styled.MainTitle>
                    <Styled.Card>
                        <Styled.InnerCard>
                            <Styled.CardImg src='/assets/nftBg.png'/>
                            <Box>
                                <Styled.GrayBord/>
                                <Styled.GrayCircle/>
                            </Box>
                            <Box>
                                <Styled.GrayBord/>
                                <Styled.GrayBut/>
                            </Box>
                        </Styled.InnerCard>
                        <Gap height={20}/>
                        <Box className='btn' width='100%' ai='center' jc='center'>
                            <Styled.ApplyButton>
                                Apply
                            </Styled.ApplyButton>
                        </Box>
                    </Styled.Card>
                </Box>
                <Styled.Line/>
                <Box d='column' ai='center' jc='center' onClick={() => history.push('/create/item/music')}>
                    <Styled.MainTitle>Music</Styled.MainTitle>
                    <Styled.Card>
                        <Styled.MusicCardInner>
                            <Styled.Inner src='/assets/nftBg.png'/>
                            <Box className='btn'
                                 sx={{display: 'flex', width: "100%", alignItems: 'center', justifyContent: 'center'}}>
                                <IconButton aria-label="previous">
                                    <SkipNextIcon/>
                                </IconButton>
                                <IconButton aria-label="play/pause">
                                    <PlayArrowIcon sx={{height: 38, width: 38}}/>
                                </IconButton>
                                <IconButton aria-label="next">
                                    <SkipPreviousIcon/>
                                </IconButton>
                            </Box>
                        </Styled.MusicCardInner>
                        <Box className='btn' width='100%' ai='center' jc='center'>
                            <Styled.ApplyButton>
                                Apply
                            </Styled.ApplyButton>
                        </Box>
                    </Styled.Card>
                </Box>
            </Styled.Container>
            {/*<Container/>*/}
        </Styled.Wrap>
    )

})
