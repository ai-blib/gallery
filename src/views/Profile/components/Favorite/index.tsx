import {CollectionsStyles as Styled} from "./styles";
import {ItemCard, CollectionCard, Gap, SelectLine, Empty, ButtonTabs} from "@/components";
import {CommonWrap, Box} from "@/styles";
import Icon from "@/icons/Icon";
import {MarketApi} from '@/apis'
import React, {memo, useCallback, useEffect, useMemo, useState} from "react";
import {CollectionExt} from "@/did/model/market";
import ImageListItem from '@mui/material/ImageListItem';
import {RouteComponentProps, withRouter} from "react-router-dom";
import {BuyModal} from '@/views/Detail/components/BuyModal';
import {getProfileInfo} from '@/redux';
import {getCurrencyString} from "@/utils/formate";
import {MusicCard} from "@/views/Music/components";

interface Props extends RouteComponentProps {
    favorites: Array<any> | undefined
}

const TabList = ['Art', 'Music'];

export const Favorite = memo(withRouter(({history, favorites}: Props) => {
    const [selectedToken, setSelectedToken] = useState<any>({});
    const [visible, setVisible] = useState<boolean>(false);
    const myOrders = favorites;
    const [options, setOptions] = useState<any>({})
    const [itemList, setItemList] = useState<Array<any>>(new Array(5).fill(0));
    const [active, setActive] = useState<number>(0);
    const handleActive = (e: any, index: number) => {
        setActive(index);
    }
    const handleChangeSelect = useCallback((key: string, value: any) => {
        setOptions((_f) => {
            return {..._f, [key]: value}
        })
    }, []);
    const list = useMemo(() => {
        const {from, to} = options['price'] || {};
        if (from && to && myOrders) {
            return myOrders.map((_n: any) => {
                const price = Number(getCurrencyString(_n.price, 8, 0))
                if (price >= Number(from) && price <= Number(to)) {
                    return _n;
                }
            }).filter((_i) => _i);
        }
        return myOrders
    }, [options, myOrders])
    const handleRightBuy = (tokenInfo) => {
        setSelectedToken(tokenInfo);
        setVisible(true)
    };
    const handleClose = useCallback(async (status: string | any) => {
        setVisible(false);
        if (status === 'ok') {
            await refresh()
        }
    }, []);
    // refresh()
    const refresh = async () => setItemList(await MarketApi.getUserOrder());
    useEffect(() => {
        (async () => {
            await refresh();
        })()
    }, []);
    let musicList = list?.filter((order) => order.musicNftUrl);
    let artList = list?.filter((order) => !order.musicNftUrl);
    console.log(musicList, artList, '123')

    return (
        <Styled.Wrap>
            <Styled.BoxTab>
                <Styled.SwitchItem>
                    <ButtonTabs background={"rgba(255, 255, 255, 0.76)"} height={40} tabs={TabList}
                                handleChange={handleActive} value={active}/>
                </Styled.SwitchItem>
            </Styled.BoxTab>
            <Box style={{padding: '0 60px'}}>
                <SelectLine active={['price']} apply={handleChangeSelect}/>
            </Box>
            <Styled.Content>
                {active === 0 && <Styled.CardsWrap id='12' active={active === 0}>
                    {(((artList && artList) ? artList : itemList).map(
                        (_item: CollectionExt | any, index) =>
                            (<ImageListItem key={index + "fav"}>
                                <Styled.CardWrap> <ItemCard handleRightBuy={handleRightBuy} key={index}
                                                            collectionId={_item.token || _item.collectionId}
                                                            id={_item.id ? `${_item.id}_${_item.index}` : ""}
                                                            nftInfo={_item}/></Styled.CardWrap>
                            </ImageListItem>)))
                    }
                </Styled.CardsWrap>}
                {active === 1 && <Styled.CardsWrap active={active === 1}>
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
                </Styled.CardsWrap>}
            </Styled.Content>
            <BuyModal orderId={selectedToken?.orderId} orderInfo={selectedToken} tokenId={selectedToken?.tokenId}
                      visible={visible}
                      onClose={handleClose}/>
        </Styled.Wrap>
    );
}));
