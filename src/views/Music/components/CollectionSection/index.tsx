import {CollectionBanner} from "@/components/Basic/CollectionBanner";
import {CollectionStyles as styled} from "@/views/Collection/styles";
import {Box} from "@/styles";
import {Skeleton} from "@mui/material";
import {Gap} from "@/components";
import {getCurrencyString} from "@/utils/formate";
import Icon from "@/icons/Icon";
import React, {memo} from "react";
import {CollectionExt} from "@/did/model/market";

export const CollectionSection = memo(({info}: { info: CollectionExt | null | undefined }) => {
    return (
        <>
            <CollectionBanner
                cover={info ? info.cover : ""}
                logo={info ? info.logo : ""}
            />
            <styled.InfoWrap>
                <Box d="column">
                    <styled.UsernameWrap>
                        {info ? info.name : <Skeleton width={100}/>}
                    </styled.UsernameWrap>
                    <Gap height={4}/>
                    <styled.CreatedWrap>
                        <styled.CreatedByWrapSpan>Created by</styled.CreatedByWrapSpan>
                        <Gap width={10}/>
                        <styled.CreatedAvatarWrap/>
                        <Gap width={8}/>
                        <styled.CreatorWrap>{info?.name}</styled.CreatorWrap>
                    </styled.CreatedWrap>
                    <Gap height={4}/>
                    <styled.DescriptionWrap>Description</styled.DescriptionWrap>
                    <styled.DescriptionContentWrap>
                        {info ? info.desc : <Skeleton width={400}/>}
                    </styled.DescriptionContentWrap>
                </Box>
                <Box d="column" ai="end">
                    <Gap height={51}/>
                    <styled.PriceBoxWrap>
                        <styled.PriceBox>
                            <styled.ColumnWrap>
                                <styled.PriceTitleWrap>
                                    Volume
                                </styled.PriceTitleWrap>
                                <styled.PriceWrap>
                                    {info ? getCurrencyString(info?.volume, 8, 2) : 0} ICP
                                </styled.PriceWrap>
                            </styled.ColumnWrap>
                            <Gap width={32}/>
                            <styled.ColumnWrap>
                                <styled.PriceTitleWrap>
                                    Floor Price
                                </styled.PriceTitleWrap>
                                <styled.PriceWrap>
                                    {info ? getCurrencyString(info.floor.toString(), 8, 2) : 0} ICP
                                </styled.PriceWrap>
                            </styled.ColumnWrap>
                            <Gap width={32}/>
                            <styled.ColumnWrap>
                                <styled.PriceTitleWrap>
                                    Items
                                </styled.PriceTitleWrap>
                                <styled.PriceWrap>
                                    {info ? info.orders.toString() : 0}
                                </styled.PriceWrap>
                            </styled.ColumnWrap>
                        </styled.PriceBox>
                    </styled.PriceBoxWrap>
                    <Gap height={12}/>
                    <Box>
                        <styled.TwitterWrap>
                            <Icon name="twitter"/>
                        </styled.TwitterWrap>
                        <Gap width={8}/>
                        <styled.DiscordWrap>
                            <Icon name="website"/>
                        </styled.DiscordWrap>
                        <Gap width={8}/>
                        <styled.DiscordWrap>
                            <Icon name="discord"/>
                        </styled.DiscordWrap>
                    </Box>
                </Box>
            </styled.InfoWrap>
        </>
    )
})
