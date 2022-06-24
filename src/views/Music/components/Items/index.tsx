import React, {useState, useEffect, useCallback, useMemo} from "react";
import {ItemsStyles as Styled} from "./styles";
import {ItemCard, SelectLine} from "@/components";
import ImageListItem from "@mui/material/ImageListItem";
import {BuyModal} from "@/views/Detail/components/BuyModal";
import {getCurrencyString} from "@/utils/formate";
import {MusicCard} from '../MusicCard'

interface Props {
    list: Array<any> | undefined;
}

export const Items = ({list}: Props) => {
    const [selectedToken, setSelectedToken] = useState<any>({});
    const [visible, setVisible] = useState<boolean>(false);
    const [options, setOptions] = useState<any>({})
    const handleRightBuy = (tokenInfo) => {
        setSelectedToken(tokenInfo);
        setVisible(true);
    };

    const handleChangeSelect = useCallback((key: string, value: any) => {
        setOptions((_f) => {
            return {..._f, [key]: value}
        })
    }, []);
    // filter data
    let nftList = useMemo(() => {
        if (!list) return undefined;
        const {from, to} = options['price'] || {};
        if (from && to) {
            return (list || []).map((_n: any) => {
                const price = Number(getCurrencyString(_n.price, 8, 0))
                if (price >= Number(from) && price <= Number(to)) {
                    return _n;
                }
            }).filter((_i) => _i);
        }
        return list
    }, [options, list])
    const handleClose = useCallback(async () => {
        setVisible(false);
    }, []);
    let loading = list === undefined;
    nftList = !loading ? nftList : new Array<any>(4).fill(5);
    return (
        <Styled.Items>
            <SelectLine active={['collection', 'price']} apply={handleChangeSelect}/>
            <Styled.CardsWrap>
                {nftList
                    ? nftList.map((_item: any, index) => (
                        <MusicCard
                            handleRightBuy={() => handleRightBuy({tokenId: _item.id, orderId: _item.index, ..._item})}
                            data={{
                                index: _item.index,
                                price: _item.price,
                                collectionId: _item.token || _item.collectionId,
                                id: _item.id,
                                cover: _item.nftUrl,
                                musicUrl: _item.musicNftUrl,
                                name: _item?.attr?.name,
                                type: 'buy'
                            }} key={index + "music"}/>
                    ))
                    : ""}
            </Styled.CardsWrap>
            <BuyModal
                orderId={selectedToken?.orderId}
                orderInfo={selectedToken}
                tokenId={selectedToken?.tokenId}
                visible={visible}
                onClose={handleClose}
            />
        </Styled.Items>
    );
};
