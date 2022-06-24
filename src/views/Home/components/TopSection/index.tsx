import {TopSectionStyles as Styled} from "./styles";
import {Box, GradientFont} from "@/styles";
import Icon from "@/icons/Icon";
import React from "react";
import {MainButton} from '@/components'
import {useHistory} from "react-router-dom";
import Paper from '@mui/material/Paper';


export const TopSection = () => {
    const history = useHistory();
    return (
        <Styled.Top>
            <Box d='column' style={{flex: 1}}>
                <Styled.MainTitle>Your Wonderful Metaverse gallery, more than an NFT market</Styled.MainTitle>
                <Styled.SubTitle>
                    A one-stop NFT market on IC <Styled.Line/>
                </Styled.SubTitle>
                <Box d='row'>
                    <Box width={120} style={{marginTop: 20}}>
                        <MainButton borderRadius={10} onClick={() => history.push('/create')}>
                            Create
                        </MainButton>
                    </Box>
                </Box>
            </Box>
            <Box d='row' width={647} style={{background: '#fffff'}}>
                <Styled.Card onClick={() => history.push('/explore')}>
                    <img className='inner' src="/assets/cardBg.png" alt=""/>
                    <Styled.Name>
                        Collection
                    </Styled.Name>
                </Styled.Card>
                <Styled.subCardWrap>
                    <Styled.SubCard onClick={() => history.push('/explore')}>
                        <img className='inner' src="/assets/sub-a.png" alt=""/>
                        <Styled.Name>
                            Drocks
                        </Styled.Name>
                    </Styled.SubCard>
                    <Styled.SubCard onClick={() => history.push('/explore')}>
                        <img className='inner' src="/assets/sub-b.png" alt=""/>
                        <Styled.Name>
                            Collection
                        </Styled.Name>
                    </Styled.SubCard>
                    <Styled.SubCard onClick={() => history.push('/explore')}>
                        <img className='inner' src="/assets/sub-c.png" alt=""/>
                        <Styled.Name>
                            Collection
                        </Styled.Name>
                    </Styled.SubCard>
                    <Styled.SubCardExplore onClick={() => history.push('/explore')}>
                        <Styled.ArrowWrap>
                            <Icon name='rightTopArrow'/>
                        </Styled.ArrowWrap>
                        <Styled.Name className='explore'>
                            Collection
                        </Styled.Name>
                    </Styled.SubCardExplore>
                </Styled.subCardWrap>
            </Box>

        </Styled.Top>

    )
}
