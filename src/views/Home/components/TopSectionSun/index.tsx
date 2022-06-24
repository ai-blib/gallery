import {TopSectionStyles as Styled} from "./styles";
import {Box} from "@/styles";
import Icon from "@/icons/Icon";
import React from "react";
import { useHistory} from "react-router-dom";


export const TopSectionSun= ()=>{
    const history = useHistory();
    return(
        <Styled.Top>
            <Box d='column'>
                <Styled.MainTitle>Explore the Infinity <Styled.WelcomeDot>.</Styled.WelcomeDot></Styled.MainTitle>
                <Styled.SubTitle>
                    NFT market on IC   <Styled.Line />
                </Styled.SubTitle>
                <Box >
                 <Styled.Button onClick={()=>history.push('/create')}>
                      Create
                 </Styled.Button>
                <Styled.ExploreBtn onClick={()=>history.push('/market')}>
                    Explore
                </Styled.ExploreBtn>
                </Box>
            </Box>
            <Box d='row'>
                    <Styled.WelcomeWrap>
                        <Styled.LogoIcon src='/assets/log-wel.png'/>
                        <Styled.WelcomeTitle>Welcome to the
                            IMart <Styled.WelcomeDot>.</Styled.WelcomeDot></Styled.WelcomeTitle>
                    </Styled.WelcomeWrap>
            </Box>
        </Styled.Top>

    )
}
