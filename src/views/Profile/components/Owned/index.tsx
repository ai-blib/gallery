import React, {useState, useEffect, memo, useCallback, useMemo} from "react";
import {OwnedStyles as Styled} from "./styles";
import {ButtonTabs, ItemCard, SelectLine} from "@/components";
import {useProfileInfoStore} from "@/redux";
import {MusicCard} from '@/views/Music/components'
import {Box} from "@/styles";
import {getCurrencyString} from "@/utils/formate";

interface Props {
    owned: { art: Array<any> | undefined, music: Array<any> | undefined };
}

const TabList = ['Art', 'Music'];
export const Owned = memo(({owned}: Props) => {
    let {art, music} = owned, artList, musicList;
    let {loading} = useProfileInfoStore();
    const [options, setOptions] = useState<any>({})
    const [active, setActive] = useState<number>(0);
    const handleActive = (e: any, index: number) => {
        setActive(index);
    }

    // const handleChangeSelect = useCallback((key: string, value: any) => {
    //     setOptions((_f) => {
    //         return {..._f, [key]: value}
    //     })
    // }, []);
    loading = loading || art === undefined;
    artList = !loading ? art : new Array<any>(4).fill(5);
    musicList = !loading ? music : new Array<any>(4).fill(5);
    return <Styled.Owned>
        <Styled.BoxTab>
            <Styled.SwitchItem>
                <ButtonTabs background={"rgba(255, 255, 255, 0.76)"} height={40} tabs={TabList}
                            handleChange={handleActive} value={active}/>
            </Styled.SwitchItem>
        </Styled.BoxTab>
        <Styled.CardsWrap active={active === 0}>
            {
                artList && artList.map((_item, index) => {
                    return <Styled.CardWrap key={`own${index}`}>
                        <ItemCard collectionId={_item.token || _item.collectionId} location={true}
                                  id={_item.id || Number(_item.id) == 0 ? `${_item.id}` : ""} nftInfo={_item}/>
                    </Styled.CardWrap>
                })
            }
        </Styled.CardsWrap>
        <Styled.CardsWrap active={active === 1}>
            {
                musicList && musicList.map((_item, index) => {
                    return <Styled.CardWrap key={`music${index}`}>
                        <MusicCard data={{
                            index: _item.index,
                            price: _item.price,
                            collectionId: _item.token || _item.collectionId,
                            id: _item.id,
                            cover: _item.nftUrl,
                            musicUrl: _item.musicNftUrl,
                            name: _item?.attr?.name,
                            type: 'sell'
                        }}/>
                    </Styled.CardWrap>
                })
            }
        </Styled.CardsWrap>
    </Styled.Owned>
})
