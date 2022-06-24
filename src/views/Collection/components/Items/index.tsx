import React, {useState, useEffect, useCallback, useMemo} from "react";
import {ItemsStyles as Styled} from "./styles";
import {ItemCard, SelectLine, SelectOption} from "@/components";
import ImageListItem from "@mui/material/ImageListItem";
import {BuyModal} from "@/views/Detail/components/BuyModal";
import {getCurrencyString} from "@/utils/formate";
import {Options, optionType} from "@/config";

interface Props {
    list: Array<any> | undefined;
    collectionInfo: Object | undefined | null
}

export const Items = ({list, collectionInfo}: Props) => {
    const [selectedToken, setSelectedToken] = useState<any>({});
    const [visible, setVisible] = useState<boolean>(false);
    const [options, setOptions] = useState<any>({})
    const [sortOption, setSortOption] = useState();

    const handleRightBuy = (tokenInfo) => {
        setSelectedToken(tokenInfo);
        setVisible(true);
    };
    const handleChangeOption = useCallback((e, value) => setSortOption(value), []);

    const handleChangeSelect = useCallback((key: string, value: any) => {
        setOptions((_f) => {
            return {..._f, [key]: value}
        })
    }, []);
    // filter data
    let nftList = useMemo(() => {
        if (!list) return undefined;
        const {from, to} = options['price'] || {};
        const {canisterId} = options['collection'] || {};

        let ArrayList: Array<any> = list;
        //collection
        if (canisterId) {
            ArrayList = ArrayList.filter(({token}) => {
                return String(token) === String(canisterId)
            })
        }
        // price
        if (from && to) {
            ArrayList = ArrayList.filter((_n: any) => {
                const price = Number(getCurrencyString(_n.price, 8, 0))
                return (price >= Number(from) && price <= Number(to))
            });
        }
        const type = (Options.find((_item) => _item.title == sortOption))?.type;
        //price up
        if (type === optionType.PRICE_UP) {
            let array = [...ArrayList]
            ArrayList = array.sort((a, b) => (Number(b.price) - Number(a.price)));
        } else if (type === optionType.PRICE_LOWER) {
            let array = [...ArrayList]
            ArrayList = array.sort((a, b) => Number(a.price) - Number(b.price));
        } else if (type === optionType.TIME_UP) {
            let array = [...ArrayList]
            ArrayList = array.sort((a, b) => Number(b.createTime) - Number(a.createTime));
        } else if (type === optionType.TIME_LOWER) {
            let array = [...ArrayList]
            ArrayList = array.sort((a, b) => Number(a.createTime) - Number(b.createTime));
        }
        return ArrayList
    }, [options, list, sortOption])
    const handleClose = useCallback(async () => {
        setVisible(false);
    }, []);
    let loading = list === undefined;
    nftList = !loading ? nftList : new Array<any>(4).fill(5);
    return (
        <Styled.Items>
            <Styled.LineWrap>
                <SelectLine active={['price']} apply={handleChangeSelect}/>
                <SelectOption onChange={handleChangeOption} options={Options}/>

            </Styled.LineWrap>
            <Styled.CardsWrap>
                {nftList
                    ? nftList.map((_item: any, index) => (
                        <ImageListItem key={index}>
                            <Styled.CardWrap>
                                {" "}
                                <ItemCard
                                    collectionId={_item.token}
                                    handleRightBuy={handleRightBuy}
                                    key={index}
                                    id={
                                        _item.id
                                            ? `${_item.id}_${_item.index}`
                                            : ""
                                    }
                                    nftInfo={_item}
                                />
                            </Styled.CardWrap>
                        </ImageListItem>
                    ))
                    : ""}
            </Styled.CardsWrap>
            <BuyModal
                collectionInfo={collectionInfo}
                orderId={selectedToken?.orderId}
                orderInfo={selectedToken}
                tokenId={selectedToken?.tokenId}
                visible={visible}
                onClose={handleClose}
            />
        </Styled.Items>
    );
};
