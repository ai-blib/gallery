import React, {useState, useEffect, memo} from "react";
import {OwnedStyles as Styled} from "./styles";
import {ItemCard} from "@/components";

interface Props {
    list: Array<any> | undefined;
}

export const Other = memo(({list}: Props) => {
    let loading = list === undefined;
    list = !loading ? list : new Array<any>(4).fill(5)
    return <Styled.Owned>
        <Styled.CardsWrap>
            {
                list && list.map((_item, index) => {
                    return <Styled.CardWrap key={`own${index}`}>
                        <ItemCard nftInfo={{nftUrl: '/assets/nftBg.png', price: 0}}/>
                    </Styled.CardWrap>
                })
            }
        </Styled.CardsWrap>
    </Styled.Owned>
})
