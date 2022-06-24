import {MetaArtStyles as Styled} from "@/views/MetaArt/styles";
import {Link, useHistory, useParams} from "react-router-dom";
import Icon from "@/icons/Icon";
import {ButtonTabs, Gap, MainButton} from "@/components";
import {Box, Skeleton} from "@mui/material";
import {getCurrencyString} from "@/utils/formate";
import React, {useState} from "react";

const TabList = ['Assets', '3D'];

export const EnterWorld = ({enterWorld, info, handleEnterWorld}) => {
    const history = useHistory();
    const {collectionId}: { collectionId: string } = useParams()
    const handleActive = (e: any, index: number) => {
        if (index === 1) {
            history.push(`/art/${collectionId}`)
        } else {
            history.push(`/collection/${collectionId}`)
        }
    }
    return <> {!enterWorld && <Styled.Container>
        <Styled.Header>
            <Link style={{position: 'absolute', left: 10}} to={'/explore'}>
                <Icon name='logo'/>
            </Link>
            <Styled.SwitchItem>
                <ButtonTabs background={"rgba(255, 255, 255, 0.76)"} height={40} tabs={TabList}
                            handleChange={handleActive} value={1}/>
            </Styled.SwitchItem>
            <Box/>
        </Styled.Header>
        <Gap height={150}/>
        <Box>
            <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Styled.Logo src={info?.logo}/>
                <Gap width={20}/>
                <Styled.Name>
                    {info ? info.name : <Skeleton width={100}/>}
                </Styled.Name>
            </Box>
            <Gap height={20}/>

            <Styled.PriceBoxWrap>
                <Styled.PriceBox>
                    <Styled.ColumnWrap>
                        <Styled.PriceTitleWrap>
                            Volume
                        </Styled.PriceTitleWrap>
                        <Styled.PriceWrap>
                            {info ? getCurrencyString(info?.volume, 8, 2) : 0} ICP
                        </Styled.PriceWrap>
                    </Styled.ColumnWrap>
                    <Gap width={32}/>
                    <Styled.ColumnWrap>
                        <Styled.PriceTitleWrap>
                            Floor Price
                        </Styled.PriceTitleWrap>
                        <Styled.PriceWrap>
                            {info ? getCurrencyString(info.floor.toString(), 8, 2) : 0} ICP
                        </Styled.PriceWrap>
                    </Styled.ColumnWrap>
                    <Gap width={32}/>
                    <Styled.ColumnWrap>
                        <Styled.PriceTitleWrap>
                            Items
                        </Styled.PriceTitleWrap>
                        <Styled.PriceWrap>
                            {info ? info.orders.toString() : 0}
                        </Styled.PriceWrap>
                    </Styled.ColumnWrap>
                </Styled.PriceBox>
            </Styled.PriceBoxWrap>
        </Box>
        <Styled.BtnWrap>
            <Box width={250}>
                <MainButton onClick={() => handleEnterWorld(true)}>
                    Enter World
                </MainButton>
            </Box>
        </Styled.BtnWrap>
    </Styled.Container>

    }</>

}
