import React from "react";
import { ManualStyles as Styled } from "./styles";
import { Gap, SearchInput } from "@/components";
import { Box } from "@/styles";
import { useHistory } from "react-router-dom";
import Icon from "@/icons/Icon";
export default () => {
    const history = useHistory();
    return (
        <Styled.ManualWrap>
            <Gap height={40} />
            <Styled.BannerWrap>
                <Styled.IconWrap>
                    {" "}
                    <Icon name="downLogo" />
                </Styled.IconWrap>
                <Styled.IconWrapEnd>
                    <Icon name="halfLogo" />
                </Styled.IconWrapEnd>
                <Styled.CircleIconWrap>
                    <Icon name="backCircle" />
                </Styled.CircleIconWrap>
                <Gap height={33} />
                <Icon name="manualLogo" /> <Gap height={41} />
                <Styled.InputWrap>
                    <SearchInput placeholder="Search by collection, items, artists, etc" />
                </Styled.InputWrap>
            </Styled.BannerWrap>
            <Gap height={40} />
            <Styled.Box>
                <Styled.RowWrap>
                    <Styled.CardWrap
                        onClick={() => window.open('https://mixlabs.notion.site/How-to-create-an-iMart-account-4028e95d7e4040b7a1b33bc125c244d1')}>
                        Preparation before purchasing
                    </Styled.CardWrap>
                    <Styled.CardWrap
                        onClick={() => window.open('https://mixlabs.notion.site/How-to-buy-NFTs-3035ca031b8441ec94a85368fac7ec5b')}>How
                        to buy?</Styled.CardWrap>
                </Styled.RowWrap>
                <Styled.RowWrap>
                    <Styled.CardWrap
                        onClick={() => window.open('https://mixlabs.notion.site/How-to-sell-NFTs-00f589cf803a45348f8fabd3cdb1995e')}>How
                        to sell?</Styled.CardWrap>
                    <Styled.CardWrap
                        onClick={() => window.open('https://mixlabs.notion.site/How-to-create-an-NFT-4490ad8492c04cfebb865d62f2194634')}>How
                        to create?</Styled.CardWrap>
                </Styled.RowWrap>
                <Styled.RowWrap>
                    <Styled.CardWrap
                        onClick={() => window.open('https://mixlabs.notion.site/How-to-launch-a-collection-7d117a355cf34125954619a4126151dc')}>How
                        to list NFT Sales？</Styled.CardWrap>
                    <Styled.CardWrap
                        onClick={() => window.open('https://mixlabs.notion.site/Frequently-Asked-Questions-a880f5845db54bc997613411558025b7')}>
                        FAQ
                    </Styled.CardWrap>
                </Styled.RowWrap>
            </Styled.Box>
        </Styled.ManualWrap>
    );
};
